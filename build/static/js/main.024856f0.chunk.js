(this["webpackJsonpwp-theme"]=this["webpackJsonpwp-theme"]||[]).push([[0],{117:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(54),o=t.n(c),s=(t(62),t(3)),l=t(4),i=t(6),m=t(5),d=(t(18),t(8)),u=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarColor02"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(d.a,{className:"nav-link",to:"/"},"Home")),r.a.createElement("li",{className:"nav-item active"},r.a.createElement(d.a,{className:"nav-link",to:"/login"},"Login")))))}}]),t}(r.a.Component),p=t(14),v=t.n(p),b=t(22),h=t.n(b),g=t(23),E=t.n(g),f=t.p+"static/media/tenor.ffcd610b.gif",N=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={loading:!1,posts:[],error:""},n}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0},(function(){v.a.get("".concat("http://18.184.167.248/wordpress","/wp-json/wp/v2/posts")).then((function(a){e.setState({loading:!1,posts:a.data})})).catch((function(a){e.setState({loading:!1,error:a.response.data.message})}))}))}},{key:"render",value:function(){var e=this.state.posts,a=this.state.loading,t=this.state.error;return r.a.createElement("div",null,r.a.createElement(u,null),t&&r.a.createElement("div",{className:"alert alert-danger"},t),e.length?r.a.createElement("div",{className:"mt-5 post-container"},e.map((function(e){return r.a.createElement("div",{key:e.id,className:"card border-dark mb-3"},r.a.createElement("div",{className:"card-header"},r.a.createElement(d.a,{to:"/post".concat(e.id)},e.title.rendered)),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-text post-content"},h()(e.excerpt.rendered))),r.a.createElement("div",{className:"card-footer"},r.a.createElement(E.a,{fromNow:!0},e.date),r.a.createElement(d.a,{to:"/post/".concat(e.id),className:"btn btn-secondary float-right"},"Read More")))}))):"",a&&r.a.createElement("img",{className:"loader",src:f,alt:"Loader"}))}}]),t}(r.a.Component),j=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={loading:!1,post:{},error:""},n}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0},(function(){v.a.get("".concat("http://18.184.167.248/wordpress","/wp-json/wp/v2/posts/").concat(e.props.id)).then((function(a){e.setState({loading:!1,post:a.data})})).catch((function(a){e.setState({loading:!1,error:a.response.data.message})}))}))}},{key:"render",value:function(){var e=this.state,a=e.post,t=e.error,n=e.loading;return r.a.createElement("div",null,r.a.createElement(u,null),t&&r.a.createElement("div",{className:"alert alert-danger"},t),Object.keys(a).length?r.a.createElement("div",{className:"mt-5 post-container"},r.a.createElement("div",{key:a.id,className:"card border-dark mb-3"},r.a.createElement("div",{className:"card-header"},a.title.rendered),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-text post-content"},h()(a.content.rendered))),r.a.createElement("div",{className:"card-footer"},r.a.createElement(E.a,{fromNow:!0},a.date)))):"",n&&r.a.createElement("img",{className:"loader",src:f,alt:"Loader"}))}}]),t}(r.a.Component),O=t(56),k=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).onFormSubmit=function(e){e.preventDefault();var a={username:n.state.username,password:n.state.password};n.setState({loading:!0},(function(){v.a.post("".concat("http://18.184.167.248/wordpress","/wp-json/jwt-auth/v1/token"),a).then((function(e){void 0!==e.data.token?(localStorage.setItem("token",e.data.token),localStorage.setItem("username",e.data.username),n.setState({loading:!1,token:e.data.token,userNiceName:e.data.userNiceName,userEmail:e.data.userEmail,loggedIn:!0})):n.setState({error:e.data.message,loading:!1})})).catch((function(e){n.setState({error:e.response.data,loading:!1})}))}))},n.handleOnChange=function(e){n.setState(Object(O.a)({},e.target.name,e.target.value))},n.state={username:"",password:"",userNiceName:"",userEmail:"",loggedIn:!1,loading:!1,error:""},n}return Object(l.a)(t,[{key:"render",value:function(){var e=this.state,a=e.username,t=e.password;return r.a.createElement("div",null,r.a.createElement(u,null),r.a.createElement("form",{className:"login-form",onSubmit:this.onFormSubmit},r.a.createElement("label",{className:"form-group"},"Username:",r.a.createElement("input",{type:"text",className:"form-control",name:"username",value:a,onChange:this.handleOnChange})),r.a.createElement("br",null),r.a.createElement("label",{className:"form-group"},"Password:",r.a.createElement("input",{type:"password",className:"form-control",name:"password",value:t,onChange:this.handleOnChange})),r.a.createElement("br",null),r.a.createElement("button",{className:"btn btn-primary mb-3",type:"submit"},"Login")))}}]),t}(r.a.Component),w=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d.b,null,r.a.createElement(N,{path:"/"}),r.a.createElement(j,{path:"/post/:id"}),r.a.createElement(k,{path:"/login"})))}}]),t}(r.a.Component);o.a.render(r.a.createElement(w,null),document.getElementById("root"))},18:function(e,a,t){},57:function(e,a,t){e.exports=t(117)},62:function(e,a,t){},96:function(e,a){},98:function(e,a){}},[[57,1,2]]]);
//# sourceMappingURL=main.024856f0.chunk.js.map