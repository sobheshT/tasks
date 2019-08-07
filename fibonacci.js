var1=0;
var2=1;
var var3;
console.log(var1);
console.log(var2);
num = 5;
for(var i=0; i <= num;i++)
		{
            
			var3 = var1 + var2;
			var1 = var2;
			var2 = var3;
 
			console.log(var3);
		}