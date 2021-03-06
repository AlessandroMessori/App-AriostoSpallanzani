import Firebase from "firebase";

class Messages {

    constructor(Modals, Comments, Likes, Notifications) {

        this.sendPost = (newData, binary, contentType) => {

            const newPostKey = Firebase.database().ref().child(contentType).push().key;

            if (binary.length > 0) {
                const storageRef = Firebase.storage().ref(contentType + "/" + newPostKey);
                binary.map(item => {
                    const childRef = storageRef.child(item.name);
                    childRef.put(item.binary);
                });
            }

            let updates = {};
            updates["/" + contentType + "/" + newPostKey] = newData;
            Firebase.database().ref().update(updates)
                .then(() => {
                    Modals.ResultTemplate("Post Pubblicato con Successo");
                    const text = `${newData.author} ha pubblicato qualcosa in ${contentType}`;
                    Notifications.send("/topics/All", "App Ariosto Spalllanzani", text, {
                        post: newPostKey,
                        type: contentType
                    });
                })
                .catch(() => Modals.ResultTemplate("Errore nella Pubblicazione del Post"));
        };

        this.getPosts = (scope, rootScope, state, spinner, type) => {

            const storage = Firebase.storage();
            const self = this;
            if (spinner) document.getElementById(spinner).style.display = "block";
            scope.Posts = [];

            const ModelRef = Firebase.database().ref(type);
            ModelRef.on("value", snapshot => {
                const results = snapshot.val();
                let posts = [];

                if (results != null) {
                    Object.keys(results).map((item, i) => {

                        const maxLength = Object.keys(results).length;
                        let files = [];

                        if (results[item].files != undefined) {

                            results[item].files.map((file, j) => {
                                const stRef = storage.ref(type + "/" + item);
                                stRef.child(file).getDownloadURL().then(url => {
                                    files.push({
                                        url,
                                        name: file
                                    });

                                    if (j == results[item].files.length - 1) {
                                        Firebase.storage().ref("Profili").child(results[item].userMail).getDownloadURL()
                                            .then(url => self.setPostProperties(results, files, state, posts, scope, rootScope, item, i, maxLength, url))
                                            .catch(() => self.setPostProperties(results, files, state, posts, scope, rootScope, item, i, maxLength, "dist/Images/user.jpg"));
                                    }

                                });
                            });
                        } else {
                            const defaultImage = require("../../../../Images/user.jpg");
                            Firebase.storage().ref("Profili").child(results[item].userMail).getDownloadURL()
                                .then(url => self.setPostProperties(results, files, state, posts, scope, rootScope, item, i, maxLength, url))
                                .catch(() => self.setPostProperties(results, files, state, posts, scope, rootScope, item, i, maxLength, defaultImage));
                        }
                    });
                }

            });

        };

        this.setPostProperties = (results, files, state, posts, scope, rootScope, item, i, maxLength, url) => {


            posts[i] = {
                author: results[item].author,
                text: results[item].text,
                date: results[item].date,
                avatar: url,
                files: files,
                links: results[item].links,
                id: item,
                likeCount: 0,
                commentCount: 0,
                link(dest) {
                    rootScope.currentPost = item;
                    rootScope.currentPostAuthor = results[item].authorID;
                    state.go(dest);
                },
                linkToProfile() {
                    rootScope.currentProfile = {
                        name: results[item].author,
                        avatar: url,
                        mail: results[item].userMail
                    };
                    rootScope.profileUpdatable = false;
                    state.go("updateProfile");
                },
                like() {
                    Likes.checkLike(Firebase.auth().currentUser.displayName, results[item].authorID, item, rootScope.contentType);
                }
            };


            Comments.getCommentCount(item, scope, posts, i, results, maxLength);


        };

        this.deletePost = (scope, postId, postList, modals) => {
            document.getElementById(postList).style.display = "none";
            Firebase.database().ref("Post/" + postId).remove()
                .then(() => {
                    modals.ResultTemplate("post eliminato con successo");
                    scope.doRefresh();
                    document.getElementById(postList).style.display = "block";
                    scope.$apply();
                });
        };

        this.getState = contentType => {

            let state;

            switch (contentType) {
                case "Comunicazioni":
                    state = "tab.forum";
                    break;
                case "Post":
                    state = "tab.libera";
                    break;
                case "Orientamento":
                    state = "tab.orientamento";
                    break;
            }

            return state;

        };

    }

}


export default Messages;



