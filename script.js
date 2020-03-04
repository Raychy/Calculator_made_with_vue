new Vue({
    el:'#app',
    data:{
        display:0,
        operatorClicked: false,
        previous:null,
        operator:null,
        Sign:''
    },
    methods:{
        GetNumber(num){
            if (this.operatorClicked === true) {
                this.display = '';
                this.operatorClicked = false;
              }
              this.display =
                this.display === 0
                  ? (this.display = num)
                  : '' + this.display + num;
        },
        Delete(){
            this.display = 0;
        },
        
        Add(){
            this.operator = (num1, num2)=>num1+num2;
            this.previous = this.display;
            
            this.operatorClicked = true;
            this.Sign = '+'
           
        },
        Sub(){
            this.operator = (num1, num2)=>num1-num2;
            this.previous = this.display;
            this.operatorClicked = true;
            this.Sign = '-'
        },
        Mul(){
            this.operator = (num1, num2)=>num1*num2;
            this.previous = this.display;
            this.operatorClicked = true;
        },
        Div(){
            this.operator = (num1, num2)=>num1/num2;
            this.previous = this.display;
            this.operatorClicked = true;
        },
        decimal(){
            if (this.display.indexOf('.') === -1){
                this.display.append('.');
            }
        },
        percentage(){
            this.display=this.display/100;
        },
        square(){
            this.operator = (num1) => num1**2;
            this.previous = this.display;
            this.operatorClicked = true;
        },
        Log(){
            this.display = Math.log(this.display);    
        },
        SquareRoot(){
            this.display = Math.sqrt(this.display);    
        },
        Cos(){
            this.display = Math.cos(this.display);    
        },
        Cosh(){
            this.display = Math.cosh(this.display);    
        },
        Sin(){
            this.display = Math.sin(this.display);    
        },
        Sinh(){
            this.display = Math.sinh(this.display);    
        },
        Tan(){
            this.display = Math.tan(this.display);    
        },
        Tanh(){
            this.display = Math.tanh(this.display);    
        },
        Exp(){
            this.display = Math.exp(this.display);    
        },
        sign(){
            this.display =
            this.display < 0 
            ? (this.display = this.display - this.display * 2)
            : (this.display = this.display - this.display * 2);
        },
        equal(){
            this.display=this.operator(Number(this.previous), Number(this.display));
            this.previous = null;
            this.operatorClicked = true;
        }
    }
})