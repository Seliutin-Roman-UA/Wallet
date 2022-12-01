"use strict";(self.webpackChunkwallet=self.webpackChunkwallet||[]).push([[319],{319:function(n,e,i){i.r(e),i.d(e,{default:function(){return I}});i(2791);var t,r,o,a,s,l,d,c,h,m,p,x=i(5705),f=i(8724),u=i(9434),g=i(1724),w=i(168),b=i(7691),j=i(1087),Z=i(3794),y=i(666),P=b.ZP.div(t||(t=(0,w.Z)(["\n  background-color: white;\n  width: 320px;\n  heigth: 100vh;\n  padding: 107px 20px;\n  @media "," {\n    width: 533px;\n    border-radius: 20px;\n    padding: 40px 59px 62px 65px;\n  }\n"])),y.U.tablet),v=b.ZP.h2(r||(r=(0,w.Z)(["\n  color: var(--black);\n  font-family: 'Poppins Bold';\n  font-weight: 700;\n  font-size: 30px;\n  line-height: 1.5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 60px;\n"]))),C=(0,b.ZP)(Z.Z)(o||(o=(0,w.Z)(["\n  margin-right: 20px;\n"]))),k=b.ZP.form(a||(a=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),E=b.ZP.label(s||(s=(0,w.Z)(["\n  margin-bottom: 32px;\n"]))),z=b.ZP.input(l||(l=(0,w.Z)(["\n  width: 280px;\n  border: none;\n  outline: 0;\n  border-bottom: 1px solid #e0e0e0;\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 1.5;\n  color: #bdbdbd;\n  padding-left: 45px;\n  padding-bottom: 8px;\n  @media "," {\n    width: 410px;\n  }\n"])),y.U.tablet),L=b.ZP.p(d||(d=(0,w.Z)(["\n  font-family: 'Circe';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 1.5;\n  color: #24cca7;\n  margin-top: 5px;\n"]))),S=(0,b.ZP)(Z.Z)(c||(c=(0,w.Z)(["\n  position: absolute;\n"]))),U=b.ZP.button(h||(h=(0,w.Z)(["\n  font-family: 'Circe';\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 1.5;\n  text-align: center;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n\n  color: #ffffff;\n  width: 280px;\n  height: 50px;\n  margin-bottom: 20px;\n  background-color: #24cca7;\n  border: none;\n  border-radius: 20px;\n  @media "," {\n    width: 300px;\n  }\n"])),y.U.tablet),q=(0,b.ZP)(j.rU)(m||(m=(0,w.Z)(["\n  font-family: 'Circe';\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 1.5;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  color: #4a56e2;\n  width: 280px;\n  height: 50px;\n  background-color: #ffffff;\n  border: 1px solid #4a56e2;\n  border-radius: 20px;\n  @media "," {\n    width: 300px;\n  }\n"])),y.U.tablet),R=i(1548),_=i(3329),T=function(){var n=(0,u.I0)(),e=g.Ry().shape({email:g.Z_().email().required("Enter email"),password:g.Z_().min(6,"Password is too short, at least 6!").max(12,"Password is too long, at maximum 12!").required("Enter password"),username:g.Z_().min(1,"Too Short!").max(12,"Too Long!").required("Enter name"),confirm:g.Z_().required("Enter password").oneOf([g.iH("password"),null],"Your passwords are different, try harder!")});return(0,_.jsx)(x.J9,{initialValues:{email:"",password:"",confirm:"",username:""},validationSchema:e,onSubmit:function(e,i){var t=e.email,r=e.password,o=e.username,a=i.resetForm;n((0,f.l9)({email:t,password:r,username:o})),a()},children:function(n){var e=n.handleSubmit,i=n.handleChange,t=n.values,r=n.errors,o=n.touched;return(0,_.jsxs)(P,{children:[(0,_.jsxs)(v,{children:[(0,_.jsx)(C,{src:R.jY,className:"logo-icon",width:30,height:30,title:"Logo"})," ","Wallet"]})," ",(0,_.jsxs)(k,{onSubmit:e,children:[" ",(0,_.jsxs)(E,{children:[(0,_.jsx)(S,{src:R.Do,width:30,height:28,title:"Email"}),(0,_.jsx)(z,{type:"email",name:"email",value:t.email,onChange:i,placeholder:"E-mail"})," ",r.email&&o.email?(0,_.jsx)(L,{children:r.email}):null]}),(0,_.jsxs)(E,{children:[(0,_.jsx)(S,{src:R.dR,width:30,height:28,title:"Lock"}),(0,_.jsx)(z,{type:"password",name:"password",value:t.password,onChange:i,placeholder:"Password"}),r.password&&o.password?(0,_.jsx)(L,{children:r.password}):null]}),(0,_.jsxs)(E,{children:[(0,_.jsx)(S,{src:R.dR,width:30,height:28,title:"Lock"}),(0,_.jsx)(z,{type:"password",name:"confirm",value:t.confirm,onChange:i,placeholder:"Confirm password"}),r.confirm&&o.confirm?(0,_.jsx)(L,{children:r.confirm}):null]}),(0,_.jsxs)(E,{children:[(0,_.jsx)(S,{src:R.JT,width:30,height:28,title:"Account"}),(0,_.jsx)(z,{type:"text",name:"username",value:t.username,onChange:i,placeholder:"First name "}),r.username&&o.username?(0,_.jsx)(L,{children:r.username}):null]}),(0,_.jsx)(U,{type:"submit",children:"Register"}),(0,_.jsx)(q,{to:"/login",children:"Log In"})]})]})}})},F=b.ZP.div(p||(p=(0,w.Z)(["\ndisplay: flex;\n    flex-direction: column;\n    align-items: center;"]))),I=function(){return(0,_.jsx)(F,{children:(0,_.jsx)(T,{})})}}}]);
//# sourceMappingURL=319.afdf0b3f.chunk.js.map