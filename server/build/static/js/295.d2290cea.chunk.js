"use strict";(self.webpackChunkmaplibregrid=self.webpackChunkmaplibregrid||[]).push([[295],{98883:function(e,t,n){n.r(t),n.d(t,{default:function(){return ie}});var i=n(93433),r=n(74165),s=n(15861),o=n(29439),a=n(72791),d=n(29669),l=n.n(d),u=n(56111),c=(n(10262),n(5112)),p=n.n(c),x=(n(14038),n(5483)),f=n.n(x),m=n(56488),y=n(29002),h=n(57689),g=n(68870),b=n(35527),v=n(53767),Z=n(20890),w=n(36520),j=n(94721),k=n(81910),S=n(58562),T=n(82455),C=n(90983),I=n(29823),D=n(3746),F=n(87740),z=n(75985),A=(n(5462),n.p+"static/media/cardbg.27f8d9bebeeb185ef7df.png"),M=n.p+"static/media/cardbgDark.81def748094c1b07c8ac.png",B=n(38308),P=n(19601),E=n(13400),N=n(39504),R=n(11087),O=n(56305),L=n(37532),W=n(85545),U=n(80184),V=function(e){var t=e.filterState,n=e.modalC,i=null===t||void 0===t?void 0:t.likesList,r=null===t||void 0===t?void 0:t.favoritesList;return(0,U.jsx)(U.Fragment,{children:(0,U.jsxs)(g.Z,{sx:{height:{xs:"425px",md:"490px"},width:{xs:"290px",md:"365px"},borderRadius:"15px",position:"absolute",backgroundColor:"background.secondary",top:"80px",left:{xs:"-14%",md:"0%"}},children:[(0,U.jsxs)(g.Z,{sx:{position:"relative",borderRadius:"15px"},children:[(0,U.jsx)(g.Z,{sx:{position:"absolute",top:"10px",right:"10px"},children:(0,U.jsx)(E.Z,{onClick:function(){n(!1)},children:(0,U.jsx)(I.Z,{sx:{fontSize:"30px",color:"white",background:"linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)","&:hover":{background:"linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)"},opacity:"",padding:"8px",borderRadius:"10px"}})})}),(0,U.jsx)(g.Z,{sx:function(e){return{boxShadow:"light"===e.palette.mode?"rgb(242,231,231) 10px 10px 20px 22px inset, rgb(242,231,231) 10px 18px 36px 28px inset":"rgb(21 0 47 / 60%) 10px 10px 20px 22px inset, rgb(21 0 47 / 60%) 10px 18px 36px 28px inset",backgroundImage:"url(".concat(O.J,"/upload/").concat(null===t||void 0===t?void 0:t.capturesImage,")"),backgroundPosition:"center",backgroundSize:"cover",borderRadius:"10px",height:{xs:"160px",md:"215px"},width:"100%"}}})]}),(0,U.jsxs)(N.Z,{sx:{m:{xs:0}},children:[(0,U.jsx)(Z.Z,{gutterBottom:!0,sx:{pb:2,fontSize:{xs:"15px"}},children:null===t||void 0===t?void 0:t.name}),(0,U.jsxs)(g.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,U.jsx)(Z.Z,{sx:{fontSize:{xs:"15px"}},children:" Price"}),(0,U.jsx)(Z.Z,{component:"p",sx:{fontSize:{xs:"15px"}},children:(null===t||void 0===t?void 0:t.productTotalPrice)+"$"})]}),(0,U.jsxs)(g.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,U.jsxs)(Z.Z,{sx:{fontSize:{xs:"15px"}},children:[" ","Lat / Lng"]}),(0,U.jsx)(Z.Z,{component:"p",sx:{fontSize:{xs:"15px"}},children:"55.3231 , 25.5454"})]}),(0,U.jsxs)(g.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,U.jsx)(Z.Z,{sx:{fontSize:"1rem",color:"gray",fontWeight:700},children:"Auther"}),(0,U.jsxs)(g.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",color:"gray"},children:[(0,U.jsx)(Z.Z,{component:"p",sx:{fontSize:"10px",mr:1,maxWidth:"120px",overflow:"hidden"},children:"Join Smith"}),(0,U.jsx)(g.Z,{children:(0,U.jsx)(W.Z,{style:{width:"35px",height:"35px",borderRadius:"50%"}})})]})]}),(0,U.jsxs)(g.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"centers"},children:[(0,U.jsx)(Z.Z,{component:"p",sx:{fontSize:"1rem",color:"gray",fontWeight:700},children:"status"}),(0,U.jsx)(Z.Z,{color:null!==t&&void 0!==t&&t.paidStatusContract?"green":"red",component:"p",sx:{fontSize:"12px",ml:1,mt:1,fontWeight:700},children:null!==t&&void 0!==t&&t.paidStatusContract?"Mint succes":"pending"})]}),(0,U.jsx)(L.Z,{userlikeviews:{likesList:i,favoritesList:r},howManyViews:null===t||void 0===t?void 0:t.howManyViews}),(0,U.jsx)(R.rU,{to:"/nftDetail/".concat(null===t||void 0===t?void 0:t._id),style:{textDecoration:"none",marginBottom:"20px"},children:(0,U.jsx)(y.Z,{text:"View Details"})})]})]})})},J=a.memo(V),Q=n(76943),Y=n(59434),H=n(36151),_=n(43878),q=(n(24310),function(e){var t=e.ceil,n=e.setBLoading,i=e.loadCeil,d=e.discountValue,l=(0,B.mA)().address,u=a.useState(0),c=(0,o.Z)(u,2),p=c[0],x=c[1],f=a.useCallback((0,s.Z)((0,r.Z)().mark((function e(){var n,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=7;break}return e.next=3,Number(t.totalceil.length)*Number(t.tilePrice);case 3:return n=(n=e.sent).toFixed(2),i=100*(+n-+d),e.abrupt("return",+i);case 7:case"end":return e.stop()}}),e)}))),[t,d]);function y(){return(y=(0,s.Z)((0,r.Z)().mark((function e(i,s){var o,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n(!0),!p){e.next=9;break}return o={snapshot:t.snapshot,user:t.user,lang:t.lang,long:t.long,tilePrice:t.tilePrice,areaLength:t.totalceil.length,totalceil:JSON.stringify(t.totalceil),address:t.address,discount:+d,token:i,type:"stripe"},e.next=5,(0,m.gg)(o,n);case 5:"ok"===(a=e.sent).status?(n(!1),z.Am.success(null===a||void 0===a?void 0:a.message),setTimeout((function(){window.location.reload()}),4e3)):(z.Am.error("Nft Transfer Failed!"),n(!1)),e.next=10;break;case 9:console.log("not Found!");case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return a.useEffect((function(){(0,s.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t=e.sent,x(t);case 4:case"end":return e.stop()}}),e)})))()}),[f,x,d,t]),console.log("price---\x3e",p,+t.discounted),(0,U.jsx)("div",{children:l?i?(0,U.jsx)(_.Z,{style:{width:"100%",margin:"5px 0px"},className:"center",stripeKey:"pk_test_51MNHzbF5wRQ0Uvcs7XByXeDH2xPTWhOEsOppkdGSEsQLdVfeOTCxddjsmpCd8ZDX9UyBKX8zUOhFbC6ePG29yPpi007D8UomKd",token:function(e,t){return y.apply(this,arguments)},amount:p,name:"Sample Book",billingAddress:!0}):(0,U.jsx)(Z.Z,{sx:{color:"#37D1B5",fontWeight:700},children:"Loading ........."}):(0,U.jsx)(H.Z,{sx:{fontSize:{xs:"12px",md:"20px"},width:"100%",marginTop:{xs:"10px",md:"20px"},borderRadius:"10px",background:" linear-gradient(90deg, rgba(110,7,199,0.9223039557619923) 37%, rgba(204,13,227,0.981127485173757) 79%)",fontWeight:700},children:"Please connect to your wallet!"})})}),K=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLatestPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"string","name":"uri","type":"string"}],"name":"safeMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"setTokenPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_usdt","type":"uint256"}],"name":"usdtToBNB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_usdt","type":"uint256"}],"name":"usdtToToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]'),X="0x966c0dafDF85E194B051DeA34666B63722151e6A",G=n(55794),$=n(24082),ee=n(4834);function te(e){var t=e.ceilDetailsstate,n=e.dataValue,i=e.handleClose,d=e.setBLoading,l=e.openModal,u=function(){i(!1)},c=(0,B.mA)().address,p=a.useState(""),x=(0,o.Z)(p,2),f=x[0],y=x[1],h=parseFloat(n).toFixed(6),w=(0,P.parseUnits)(h.toString(),6),j=(0,B.do)({address:X,abi:K,functionName:"usdtToBNB",args:[w]}),k=j.data,S=(j.isError,j.isLoading,(0,B.KQ)({address:c}).data),T=S&&+(null===S||void 0===S?void 0:S.formatted),C=(0,B.M5)({request:{to:"0xbb17CDC95b626c76E934Df7bF05fEaEFcEa9C61E",value:k},onError:function(e){d(!1)}}).config,D=(0,B.pQ)(C),F=D.data,A=D.isError,M=D.isSuccess,N=D.sendTransaction,R=a.useCallback((0,s.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!A&&M&&(0,m.Ol)(F,A,t,+w,d,f);case 1:case"end":return e.stop()}}),e)}))),[F,A,M,t]);a.useEffect((function(){R()}),[R,t]);var O=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f){e.next=2;break}return e.abrupt("return",z.Am.error("Please enter Address"));case 2:return e.next=4,(0,m.FD)(f);case 4:if("ok"!==(null===(t=e.sent)||void 0===t?void 0:t.status)){e.next=10;break}if(!(+T<0)){e.next=8;break}return e.abrupt("return",z.Am.error("insuficient Balance. "));case 8:return e.next=10,N();case 10:"error"===(null===t||void 0===t?void 0:t.status)&&z.Am.error(" user is not register");case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,U.jsx)("div",{children:(0,U.jsx)($.Z,{open:l,onClose:u,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,U.jsxs)(b.Z,{sx:{position:"absolute",top:{xs:"50%",md:"40%"},left:"50%",transform:"translate(-50%, -50%)",width:{xs:"280px",sm:"400px",md:"500px"},boxShadow:24,p:{xs:1,sm:2,md:4},borderRadius:"10px",backgroundColor:"background.secondary"},children:[(0,U.jsxs)(g.Z,{sx:{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,U.jsx)(Z.Z,{id:"modal-modal-title",variant:"h5",fontWeight:"bold",sx:{fontSize:{xs:"15px",sm:"16px",md:"20px"}},children:"NFT Mint to Specific Address By Admin"}),(0,U.jsx)(g.Z,{sx:{width:"10%"},children:(0,U.jsx)(E.Z,{onClick:u,children:(0,U.jsx)(I.Z,{sx:{fontSize:"33px",background:"linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)","&:hover":{backgroundColor:"#4a148c"},opacity:"",padding:"8px",borderRadius:"8px",color:"white"}})})})]}),(0,U.jsx)(g.Z,{sx:{p:{xs:1,md:2},my:{xs:0,md:2},display:"flex",flexDirection:{xs:"column",md:"row"},justifyContent:"start",background:"linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",borderRadius:"10px"},children:(0,U.jsx)(g.Z,{sx:{width:"100%"},children:(0,U.jsxs)(v.Z,{spacing:2,children:[(0,U.jsx)(ee.ZP,{placeholder:"Enter Address",value:f,onChange:function(e){var t=e.target.value.trim();t&&y(t)},type:"text",sx:{backgroundColor:"white",width:"100%",color:"black",borderRadius:"5px",px:2,py:.5}}),(0,U.jsx)(g.Z,{sx:{width:"100%",height:"40px",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:2,fontSize:{xs:"10px",md:"15px"},color:"white",fontWeight:500,cursor:"pointer"},onClick:O,children:"APPLY"})]})})})]})})})}var ne=a.memo(te);var ie=function(){var e,t,n=(0,h.UO)(),d=(0,h.s0)(),c=(0,Y.I0)(),x=(0,Y.v9)((function(e){return e})).ceilSlice.userdetails,E=(0,B.mA)().address,N=(0,a.useState)(0),O=(0,o.Z)(N,2),L=O[0],W=O[1],V=(0,a.useRef)(null),H=(0,a.useRef)(null),_=(0,a.useRef)(null),$=(0,a.useState)(0),ee=(0,o.Z)($,2),te=ee[0],ie=ee[1],re=(0,a.useState)(1),se=(0,o.Z)(re,2),oe=se[0],ae=(se[1],(0,a.useState)([])),de=(0,o.Z)(ae,2),le=de[0],ue=de[1],ce=(0,a.useState)(!1),pe=(0,o.Z)(ce,2),xe=pe[0],fe=pe[1],me=(0,a.useState)(""),ye=(0,o.Z)(me,2),he=ye[0],ge=ye[1],be=(0,a.useState)(!1),ve=(0,o.Z)(be,2),Ze=ve[0],we=ve[1],je=(0,a.useState)(!1),ke=(0,o.Z)(je,2),Se=ke[0],Te=ke[1],Ce=(0,a.useState)(!0),Ie=(0,o.Z)(Ce,2),De=Ie[0],Fe=Ie[1],ze=(0,a.useState)(!0),Ae=(0,o.Z)(ze,2),Me=Ae[0],Be=Ae[1],Pe=(0,a.useState)(""),Ee=(0,o.Z)(Pe,2),Ne=Ee[0],Re=Ee[1],Oe=(0,a.useState)(!1),Le=(0,o.Z)(Oe,2),We=(Le[0],Le[1]),Ue=(0,a.useState)(!1),Ve=(0,o.Z)(Ue,2),Je=Ve[0],Qe=Ve[1],Ye=(0,a.useState)(!1),He=(0,o.Z)(Ye,2),_e=He[0],qe=He[1],Ke=(0,a.useState)(""),Xe=(0,o.Z)(Ke,2),Ge=Xe[0],$e=Xe[1],et=a.useState(0),tt=(0,o.Z)(et,2),nt=tt[0],it=tt[1],rt=a.useState(!1),st=(0,o.Z)(rt,2),ot=st[0],at=st[1],dt=(0,a.useState)(!1),lt=(0,o.Z)(dt,2),ut=lt[0],ct=lt[1],pt=(0,a.useState)([73.1083603962225,31.42117432409888]),xt=(0,o.Z)(pt,2),ft=xt[0],mt=(xt[1],(0,a.useState)("")),yt=(0,o.Z)(mt,2),ht=yt[0],gt=yt[1],bt=x.role&&(null===x||void 0===x?void 0:x.role.filter((function(e){return null!==e}))),vt=!1,Zt=[],wt=parseFloat(L).toFixed(6),jt=(0,P.parseUnits)(wt.toString(),6),kt=(0,B.do)({address:X,abi:K,functionName:"usdtToBNB",args:[jt]}),St=kt.data,Tt=(kt.isError,kt.isLoading,(0,B.KQ)({address:E}).data),Ct=Tt&&+(null===Tt||void 0===Tt?void 0:Tt.formatted),It=(0,B.M5)({request:{to:"0xbb17CDC95b626c76E934Df7bF05fEaEFcEa9C61E",value:St},onError:function(e){Qe(!1)}}).config,Dt=(0,B.pQ)(It),Ft=Dt.data,zt=Dt.isLoading,At=Dt.isError,Mt=Dt.isSuccess,Bt=Dt.sendTransaction,Pt=a.useCallback((0,s.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Ft&&!ot&&(0,m.nU)(Ft,At,Ne,+jt,Qe);case 1:case"end":return e.stop()}}),e)}))),[Ft,zt,At,Mt]);a.useEffect((function(){Pt()}),[Pt]),(0,a.useEffect)((function(){var e=le.length;e&&fe(!1);var t=e*oe;ie(e),W(t)}),[le]),(0,a.useEffect)((function(){!function(){if(Zt=[],f().accessToken="pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA",!_.current){_.current=new(f().Map)({container:V.current,style:"mapbox://styles/mapbox/satellite-streets-v12",center:[55.266833632327774,25.20345319338018],zoom:16.5,scrollZoom:!0,preserveDrawingBuffer:!0});var e=new(p())({accessToken:f().accessToken,mapboxgl:f()});document.getElementById("geocoder").appendChild(e.onAdd(_.current)),_.current.on("load",(function(){var e=new u.Grid({gridWidth:.02,gridHeight:.02,units:"kilometers",minZoom:15.5,maxZoom:22,active:!1,paint:{"line-opacity":.5,"line-color":"white"}});_.current.addControl(new(f().GeolocateControl)({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0})),_.current.addControl(new(l().NavigationControl)({showZoom:!0})),_.current.addControl(e);var t,n=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var t,n,s,o,a,d,l,u,p,x,f;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s="selected-cells",_.current.addSource(s,{type:"geojson",data:{type:"FeatureCollection",features:Zt}}),_.current.addLayer({id:s,source:s,active:!0,type:"fill",paint:{"fill-color":"#0000ff","fill-opacity":.2,"fill-outline-color":"red"}}),_.current.on("grid.click",(function(e){var t=e.bbox,n=Zt.findIndex((function(e){return e.geometry.bbox.toString()===t.toString()}));if(-1===n&&!0!==vt){var r=[[[t[0],t[1]],[t[2],t[1]],[t[2],t[3]],[t[0],t[3]],[t[0],t[1]]]],o={type:"Feature",geometry:{type:"Polygon",bbox:t,coordinates:r}};Zt.push(o),ue((function(e){return[].concat((0,i.Z)(e),[o])}))}else vt?fe(!0):(Zt.splice(n,1),ue((function(e){return e.filter((function(e,t){return t!==n}))})));_.current.getSource(s).setData({type:"FeatureCollection",features:Zt}),we(!1),$e("")})),Qe(!0),o="selected-Oldcells",e.next=8,(0,m.fO)();case 8:for(a=e.sent,c((0,Q.mO)(null===(t=a)||void 0===t?void 0:t.nfts)),a=null===(n=a)||void 0===n?void 0:n.nfts,Qe(!1),d=[],l=0;l<(null===(u=a)||void 0===u?void 0:u.length);l++)for(p=0;p<(null===(x=a[l])||void 0===x?void 0:x.attributes.length);p++)d.push(null===(f=a[l])||void 0===f?void 0:f.attributes[p]);_.current.on("grid.click",(function(e){var t;console.log("event........>",e);var n=e.bbox,i=null===(t=a)||void 0===t?void 0:t.find((function(e){return null===e||void 0===e?void 0:e.attributes.find((function(e){return JSON.stringify(n)===JSON.stringify(e.geometry.bbox)}))}));""!==i&&ge(i)})),_.current.on("grid.click",(function(){we(!1)})),_.current.addSource(o,{type:"geojson",data:{type:"FeatureCollection",features:d}}),_.current.addLayer({id:"selectedCellsOldId",source:o,active:!0,type:"fill",paint:{"fill-color":"white","fill-opacity":.3,"fill-outline-color":"blue"}});case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();_.current.on("load",n()),_.current.on("mouseenter","selectedCellsOldId",(function(){vt=!0,_.current.getCanvas().style.cursor="not-allowed"})),_.current.on("mouseleave","selectedCellsOldId",(function(){vt=!1,_.current.getCanvas().style.cursor=""})),t=e,_.current.hasControl(t)?t.update():_.addControl(t)}))}}()}),[ft,_e]),(0,a.useEffect)((function(){null!==n&&void 0!==n&&n.lang&&null!==n&&void 0!==n&&n.long&&_.current.flyTo({center:[null===n||void 0===n?void 0:n.long,null===n||void 0===n?void 0:n.lang]})}),[n]);var Et=function(){var n=(0,s.Z)((0,r.Z)().mark((function n(){var i,s,o,a,d,l;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(d=le.length/2,l=Math.floor(d),e=null===(i=le[l])||void 0===i||null===(s=i.geometry)||void 0===s?void 0:s.bbox[0],t=null===(o=le[l])||void 0===o||null===(a=o.geometry)||void 0===a?void 0:a.bbox[1],!(le.length<30)){n.next=7;break}return n.next=7,_.current.flyTo({center:[e,t],zoom:(null===le||void 0===le?void 0:le.length)>9?(null===le||void 0===le?void 0:le.length)<18?17:(null===le||void 0===le?void 0:le.length)<25?16.7:16.5:18});case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Nt=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.current.flyTo({zoom:16.5});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Rt=function(){var n=(0,s.Z)((0,r.Z)().mark((function n(){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,null!==x&&void 0!==x&&x.id){n.next=4;break}return d("/login"),n.abrupt("return",!1);case 4:E&&null!==x&&void 0!==x&&x.id?(Et(),We(!0),setTimeout((function(){var n=document.querySelector("#snapshot"),i=n.getContext("2d"),r=_.current.getCanvas().toDataURL(),s=window.devicePixelRatio,o=window.innerWidth*s,a=window.innerHeight*s;n.height=a,n.width=o;var d=new Image;d.src=r,d.onload=function(){i.drawImage(d,0,0)};var l={totalceil:le,snapshot:r,user:null===x||void 0===x?void 0:x.id,tilePrice:oe,address:E,lang:t,long:e,discounted:nt};console.log("obj....>",l),Re(l),$e(l),Nt()}),2e3)):z.Am.error("Please connect Wallet !"),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log("Error In buyCell process ",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),Ot=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Te(!Se);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Lt=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var t,n,i,s,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!ht){e.next=17;break}return e.next=3,(0,m.Le)(ht);case 3:if(n=e.sent,!(i=null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.data)){e.next=14;break}return s=Number(i.offers),W(L-(o=L/100*s)),it(o),document.querySelector(".promoInputSection").style.display="none",e.abrupt("return",z.Am.success("Discount Code applied"));case 14:return e.abrupt("return",z.Am.error("This Promo is not working"));case 15:e.next=18;break;case 17:return e.abrupt("return",z.Am.error("Please Provide Valid Promo Code"));case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Wt=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Rt(),at(!0);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(G.Z,{loading:Je}),Ne&&ot?(0,U.jsx)(ne,{handleClose:at,openModal:ot,ceilDetailsstate:Ne,setBLoading:Qe,dataValue:L}):"",(0,U.jsxs)(g.Z,{sx:{display:"flex",flexDirection:"column",maxWidth:"xl"},children:[(0,U.jsx)("div",{id:"screenshot",ref:H,children:(0,U.jsx)(g.Z,{sx:{height:"100vh",marginRight:"0px",mt:0,position:"relative"},ref:V})}),(0,U.jsxs)(b.Z,{sx:{position:"absolute",top:{xs:"60px",md:"120px"},zIndex:"1",right:{xs:"30%",md:"6%"},width:{xs:"200px",md:"350px"},borderRadius:"15px",padding:{xs:"0px 0px",md:"4px 8px"},backgroundColor:"background.secondary",backdropFilter:"blur(1px)"},children:[(0,U.jsxs)(g.Z,{sx:{p:{md:1},display:{xs:"flex",md:"flex"},justifyContent:"flex-start",alignItems:"center"},children:[(0,U.jsx)("div",{id:"geocoder",className:"geocoder"}),(0,U.jsx)(g.Z,{sx:{display:{xs:"none",md:"block"}},children:(0,U.jsxs)(v.Z,{spacing:2,direction:"row",children:[(0,U.jsx)(C.Z,{sx:{ml:1}}),(0,U.jsx)(D.Z,{})]})})]}),te&&!0!==xe?(0,U.jsx)(g.Z,{className:"mapcontainer",id:"PaymentBox",sx:function(e){return{backgroundImage:"light"===e.palette.mode?"url(".concat(A,")"):"url(".concat(M,")"),backgroundSize:"100% 100%",position:"absolute",top:{xs:"70px",md:"90px"},left:{xs:"0%",md:"0"},zIndex:" -0.9",width:{xs:"240px",md:"350px"},height:{xs:"300px",md:"400px"},borderRadius:"15px",padding:{xs:"0px 0px",md:"4px 8px"}}},children:(0,U.jsxs)(g.Z,{p:2,ml:3,sx:{height:{xs:"245px",md:"305px"},overflowY:"scroll",backdropFilter:"blur(1px)",scrollbarColor:" rebeccapurple green",scrollbarWidth:"thin",mt:{xs:4,md:6}},children:[(0,U.jsxs)(g.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,U.jsx)(Z.Z,{sx:{fontWeight:"bold",fontSize:{xs:"14px",md:"25px"}},children:"FREE LAND"}),(0,U.jsx)(g.Z,{children:(0,U.jsxs)(v.Z,{spacing:2,direction:"row",children:[(0,U.jsx)(k.Z,{sx:{fontSize:{xs:"25px",md:"30px"},color:"white",background:"linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",padding:{xs:"4px",md:"6px"},borderRadius:"10px"}}),(0,U.jsx)(I.Z,{onClick:function(){ie(0),qe(!_e)},sx:{fontSize:{xs:"25px",md:"30px"},color:"white",cursor:"pointer",background:"linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",padding:{xs:"4px",md:"6px"},borderRadius:"10px"}})]})})]}),(0,U.jsxs)(g.Z,{mt:1,sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,U.jsxs)(v.Z,{spacing:1,direction:"row",sx:{display:"flex",alignItems:"center"},children:[(0,U.jsx)(F.Z,{}),(0,U.jsxs)(Z.Z,{sx:{color:"text.secondary",fontSize:{xs:"10px",md:"20px"}},children:["NOT LAND ART"," "]})]}),(0,U.jsx)(w.Z,{title:"You can only create land art on this map, only non Urban and water tiles for land",children:(0,U.jsx)(T.Z,{sx:{color:"text.secondary"}})})]}),(0,U.jsxs)(g.Z,{mt:2,sx:{display:"flex",justifyContent:"space-between"},children:[(0,U.jsxs)(v.Z,{spacing:2,direction:"row",sx:{display:"flex",alignItems:"center"},children:[(0,U.jsx)(S.Z,{}),(0,U.jsx)(Z.Z,{sx:{color:"text.secondary"},children:"--"})]}),(0,U.jsx)(w.Z,{title:"You can only create land art on this map, only non Urban and water tiles for land",children:(0,U.jsx)(T.Z,{sx:{color:"text.secondary"}})})]}),(0,U.jsxs)(v.Z,{spacing:1,sx:{mt:{xs:1,md:2}},children:[(0,U.jsx)(g.Z,{sx:{ml:{xs:0,md:0}},children:(0,U.jsxs)(Z.Z,{component:"h2",sx:{display:"flex",justifyContent:"space-between",fontSize:{xs:"12px",md:"30px"}},children:["$ value",(0,U.jsxs)(Z.Z,{component:"span",sx:{fontSize:{xs:"12px",md:"30px"}},children:[" ","$",null===L||void 0===L?void 0:L.toFixed(1)]})]})}),(0,U.jsxs)(g.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",color:"#848484"},children:[(0,U.jsx)(Z.Z,{variant:"body1",color:"text.secondary",sx:{fontSize:{xs:"10px",md:"20px"}},children:"Current value per tile"}),(0,U.jsx)(Z.Z,{component:"span",sx:{fontSize:{xs:"10px",md:"20px"},color:"text.secondary"},children:"$1.32"})]})]}),Ze?(0,U.jsxs)(g.Z,{sx:{pb:2},children:[(0,U.jsx)(Z.Z,{sx:{fontSize:"1rem",width:"100%"},children:"Pay with Debit Card"}),(0,U.jsx)(q,{ceil:Ne,setBLoading:Qe,loadCeil:Ge,discountValue:nt}),(0,U.jsx)(Z.Z,{variant:"p",children:"Payment processed by Wert, USD price is for indication only. 4% transaction fee will be included. Min $5 purchases."})]}):"",Se?(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(g.Z,{children:[De?(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(g.Z,{sx:{display:"flex",mt:1},children:[(0,U.jsx)(Z.Z,{sx:{fontSize:{xs:"10px",md:"15px"},width:"100%"},children:"Pay with Wallet"}),(0,U.jsx)(Z.Z,{sx:{fontSize:{xs:"10px",md:"15px"}},children:(null===E||void 0===E?void 0:E.slice(0,4))+"..."+(null===E||void 0===E?void 0:E.slice(-4))})]}),(0,U.jsx)(g.Z,{sx:{width:"100%"},onClick:(0,s.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ct(!0),!(+Ct<=0)){e.next=3;break}return e.abrupt("return",z.Am.error("Insufficient funds"));case 3:return Be(!1),e.next=6,Rt();case 6:return e.next=8,Bt();case 8:case"end":return e.stop()}}),e)}))),children:(0,U.jsx)(y.Z,{text:"Pay with wallet"})})]}):"",Me?(0,U.jsxs)(g.Z,{children:[(0,U.jsx)(g.Z,{mt:1,children:(0,U.jsx)(Z.Z,{sx:{fontSize:{xs:"10px",md:"15px"},color:"text.primery"},children:"Pay with Card"})}),(0,U.jsx)(g.Z,{onClick:(0,s.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ct(!0),we(!Ze),Fe(!De),e.next=5,Rt();case 5:case"end":return e.stop()}}),e)}))),sx:{width:"100%"},children:(0,U.jsx)(y.Z,{text:"Pay with Debit Card"})})]}):""]}),(0,U.jsxs)(g.Z,{sx:{display:"flex",flexDirection:{xs:"column",md:"row"},justifyContent:"space-between",marginTop:"1rem"},children:[(0,U.jsx)(g.Z,{sx:{display:"inline-block",color:"#fff",fontSize:{xs:null!==bt&&void 0!==bt&&bt.includes("admin")?"10px":"12px",md:null!==bt&&void 0!==bt&&bt.includes("admin")?"11px":"15px"},fontWeight:"bold",marginTop:"10px",textAlign:"center",background:"linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",padding:"10px 10px",borderRadius:"10px",cursor:"pointer",letterSpacing:"1px",width:{xs:(null!==bt&&void 0!==bt&&bt.includes("admin"),"100%"),md:null!==bt&&void 0!==bt&&bt.includes("admin")?"40%":"100%"}},onClick:function(){document.querySelector(".promoInputField").style.display="none",document.querySelector(".promoInputSection").style.display="flex"},className:"promoInputField",children:"Add Promo +"}),null!==bt&&void 0!==bt&&bt.includes("admin")?(0,U.jsx)(g.Z,{onClick:Wt,sx:{display:"inline-block",color:"#fff",fontSize:{xs:"10px",md:"11px"},fontWeight:"bold",textAlign:"center",marginTop:"10px",background:"linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",padding:"10px 10px",borderRadius:"10px",cursor:"pointer",letterSpacing:"1px"},className:"promoInputField",children:"Mint Nft to Specific"}):""]}),(0,U.jsxs)("div",{style:{width:"100%",height:"42px",marginTop:"10px",display:"none",justifyContent:"space-between"},className:"promoInputSection",children:[(0,U.jsx)("input",{style:{width:"67%",height:"100%",fontSize:"20px",borderRadius:"10px",outline:"none",border:"1px solid #dad7cd",padding:"0 4px",placeholder:"Promo Code"},value:ht,onChange:function(e){gt(e.target.value)},type:"input"}),(0,U.jsx)(g.Z,{sx:{width:"30%",height:"100%",background:"linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"10px",fontSize:{xs:"10px",md:"15px"},color:"white",fontWeight:500,cursor:"pointer"},onClick:Lt,children:"APPLY"})]}),(0,U.jsx)("br",{}),ut?(0,U.jsx)(g.Z,{sx:{mt:-1,cursor:"pointer"},onClick:function(){Be(!0),Fe(!0),we(!1)},children:(0,U.jsx)(y.Z,{className:"checkBtn",text:"Go back"})}):"",(0,U.jsx)(j.Z,{color:"white",height:"5px",style:{marginTop:"10px"}}),(0,U.jsxs)(g.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"7px"},children:[(0,U.jsx)(Z.Z,{sx:{fontSize:"1rem",fontWeight:900},children:"Total"}),(0,U.jsx)(Z.Z,{sx:{fontSize:"1rem",fontWeight:900},children:L?null===L||void 0===L?void 0:L.toFixed(2):""})]})]}):void 0,(0,U.jsx)("br",{}),null!==x&&void 0!==x&&x.id?(0,U.jsx)(g.Z,{children:Se?"":(0,U.jsx)(g.Z,{sx:{mt:-2,cursor:"pointer"},onClick:function(){var e=[];le.forEach((function(t){e.push(JSON.stringify(t.geometry.bbox))})),E?Ot():z.Am.error("connect with wallet")},children:(0,U.jsx)(y.Z,{className:"checkBtn",text:"CHECK OUT"})})}):(0,U.jsx)(R.rU,{to:"/login",style:{textDecoration:"none",color:"white"},children:(0,U.jsx)(y.Z,{text:"Login"})})]})}):(0,U.jsxs)(U.Fragment,{children:[!0===xe?"":(0,U.jsx)(b.Z,{sx:{position:"absolute",top:{xs:"70px",md:"90px"},left:{xs:"0%",md:"0"},zIndex:" -0.9",width:{xs:"240px",md:"350px"},borderRadius:{xs:"5px",md:"10px"},padding:{xs:"4px 4px",md:"10px 8px"},backdropFilter:"blur(1px)",backgroundColor:"background.secondary"},children:(0,U.jsx)(g.Z,{children:(0,U.jsx)(Z.Z,{sx:{pl:1},children:"No selected Tile"})})}),xe&&(0,U.jsx)(J,{modalC:function(e){fe(e)},filterState:he})]})]})]}),(0,U.jsx)("div",{style:{width:"100%",display:"none"},children:(0,U.jsx)("canvas",{id:"snapshot",style:{width:"100%"}})})]})}},29002:function(e,t,n){n(72791);var i=n(36151),r=n(80184);t.Z=function(e){return(0,r.jsx)(i.Z,{sx:{py:1,fontSize:{xs:"12px",md:"15px"},width:"100%",marginTop:"10px",borderRadius:"10px",background:"linear-gradient(90.1deg, #4F98D0 0.11%, #34D9B1 95.94%)",color:"white",fontWeight:700},children:e.text})}},37532:function(e,t,n){n.d(t,{Z:function(){return c}});n(72791);var i={display:"flex",justifyContent:"space-between",alignItems:"center",width:"25%",color:"lightgray"},r=n(68870),s=n(53767),o=n(20890),a=n(3746),d=n(17237),l=n(60786),u=n(80184);var c=function(e){var t,n,c=e.userlikeviews,p=e.howManyViews,x=null===c||void 0===c||null===(t=c.likesList)||void 0===t?void 0:t.length,f=null===c||void 0===c||null===(n=c.favoritesList)||void 0===n?void 0:n.length,m=null===p||void 0===p?void 0:p.length;return(0,u.jsx)(r.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",my:1},children:(0,u.jsx)(r.Z,{sx:{display:"flex",justifyContent:"space-between"},children:(0,u.jsxs)(s.Z,{spacing:1,direction:"row",children:[(0,u.jsxs)(r.Z,{style:i,children:[(0,u.jsx)(l.Z,{fontSize:"small"}),(0,u.jsx)(o.Z,{fontSize:"small",sx:{ml:.5},children:x>0?x:0})]}),(0,u.jsxs)(r.Z,{style:i,children:[(0,u.jsx)(d.Z,{fontSize:"small",sx:{ml:1}}),(0,u.jsxs)(o.Z,{fontSize:"small",sx:{ml:.5},children:[" ",f||0]})]}),(0,u.jsxs)(r.Z,{style:i,children:[(0,u.jsx)(a.Z,{fontSize:"small",sx:{ml:1}}),(0,u.jsx)(o.Z,{fontSize:"small",sx:{ml:.5},children:m||0})]})]})})})}}}]);
//# sourceMappingURL=295.d2290cea.chunk.js.map