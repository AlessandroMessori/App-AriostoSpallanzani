import "./BarComponents/main";
import "./FreeComponents/main";
import "./MenuComponents/main";


const Components = angular.module("appAS.components", ["ionic", "appAS.components.bar", "appAS.components.free", "appAS.components.menu"]);


export default Components;