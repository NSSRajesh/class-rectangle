class Rectangle{
	constructor(width,height){
		this.width=width;
		this.height=height;
	}

	area(){
		console.log('The area of rectangle is:' + this.width*this.height);
	}

	perimeter(){
		let res=2*(this.width+this.height);
		console.log('The perimeter of rectangle is:' + res);
	}
}
let ans=new Rectangle(12,12);
ans.area();
ans.perimeter();	