new Vue({
	el:'#obj',
	data:{
		noidung:"hello vuejs"
	},
	methods: {
		changeValue:function(event){
			this.noidung = event.target.value;
		}
	}
});