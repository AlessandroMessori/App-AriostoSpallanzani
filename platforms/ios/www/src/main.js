var Firebase = require('firebase');
var addArticleCtrl = require('./Components/AddArticlePage/addArticle');
var addNewsCtrl = require('./Components/AddNewsPage/addNews');
var adminCtrl = require('./Components/AdminPage/admin');
var attualitaCtrl = require('./Components/ArticlesPage/articles').attualitaCtrl;
var orientamentoCtrl = require('./Components/ArticlesPage/articles').orientamentoCtrl;
var commentsCtrl = require('./Components/CommentsPage/comments');
var likesCtrl = require('./Components/LikesPage/likes');
var linkCtrl = require('./Components/LinkPage/link');
var loginCtrl = require('./Components/LoginPage/login');
var moderationCtrl = require('./Components/ModerationPage/moderation');
var newsCtrl = require('./Components/NewsPage/newsCtrl');
var signupCtrl = require('./Components/SignupPage/signup');
var tabsCtrl = require('./Components/Tabs/tabs');
var Messages = require('./Services/Data Services/Messages');
var Articles = require('./Services/Data Services/Articles');
var Comments = require('./Services/Data Services/Comments');
var Likes = require('./Services/Data Services/Likes');
var Auth = require('./Services/Data Services/Auth');
var StaticData = require('./Services/Data Services/StaticData');
var DateHandler = require('./Services/Utility Services/DateHandler');
var InputFields = require('./Services/Utility Services/InputFields');
var StringHandler = require('./Services/Utility Services/StringHandler');
var Modals = require('./Services/Utility Services/Modals');
var FileHandler = require('./Services/Utility Services/FileHandler');
var PlatformHandler = require('./Services/Utility Services/PlatformHandler');
var ActionBar = require('./Directives/ActionBar/actionBar');
var Drawer = require('./Directives/Drawer/drawer');
var Configs = require('./Services/Utility Services/Configs');
var credentials = require('../credentials');

Firebase.initializeApp(credentials);

var appAS = angular.module('appAS', ['ionic', 'ionic.contrib.drawer']);
appAS.controller('addArticleCtrl', addArticleCtrl);
appAS.controller('addNewsCtrl', addNewsCtrl);
appAS.controller('adminCtrl', adminCtrl);
appAS.controller('attualitaCtrl', attualitaCtrl);
appAS.controller('orientamentoCtrl', orientamentoCtrl);
appAS.controller('commentsCtrl', commentsCtrl);
appAS.controller('likesCtrl', likesCtrl);
appAS.controller('linkCtrl', linkCtrl);
appAS.controller('loginCtrl', loginCtrl);
appAS.controller('moderationCtrl', moderationCtrl);
appAS.controller('newsCtrl', newsCtrl);
appAS.controller('signupCtrl', signupCtrl);
appAS.controller('tabsCtrl', tabsCtrl);
appAS.service('Messages', Messages);
appAS.service('Articles', Articles);
appAS.service('Comments', Comments);
appAS.service('Likes', Likes);
appAS.service('Auth', Auth);
appAS.service('DateHandler', DateHandler);
appAS.service('InputFields', InputFields);
appAS.service('StringHandler', StringHandler);
appAS.service('Modals', Modals);
appAS.service('StaticData', StaticData);
appAS.service('FileHandler', FileHandler);
appAS.service('PlatformHandler', PlatformHandler);
appAS.directive('actionBar', ActionBar);

appAS.run(Configs.run);

appAS.config(Configs.config);
