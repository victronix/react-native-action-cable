var EventEmitter,Subscription,boundMethodCheck=function(e,t){if(!(e instanceof t))throw new Error("Bound instance method accessed before binding")};EventEmitter=require("eventemitter3"),Subscription=class e extends EventEmitter{constructor(e,t={}){super(),this.perform=this.perform.bind(this),this.send=this.send.bind(this),this.unsubscribe=this.unsubscribe.bind(this),this.connected=this.connected.bind(this),this.disconnected=this.disconnected.bind(this),this.rejected=this.rejected.bind(this),this.received=this.received.bind(this),this.consumer=e,this.identifier=JSON.stringify(t)}perform(t,i={}){return boundMethodCheck(this,e),i.action=t,this.send(i)}send(t){return boundMethodCheck(this,e),this.consumer.send({command:"message",identifier:this.identifier,data:JSON.stringify(t)})}unsubscribe(){return boundMethodCheck(this,e),this.consumer.subscriptions.remove(this)}connected(){return boundMethodCheck(this,e),this.emit("connected")}disconnected(){return boundMethodCheck(this,e),this.emit("disconnected")}rejected(){return boundMethodCheck(this,e),this.emit("rejected")}received(t){return boundMethodCheck(this,e),t.action=null!=t.action?t.action:"received",this.emit(t.action,t)}},module.exports=Subscription;