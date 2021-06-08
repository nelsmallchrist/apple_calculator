import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  Screen from './components/screen';
import First_tablet from './components/first_tablet';

class Calculator extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            nbr1: null,
            nbr2: null,
            nbr: parseFloat('0'),
            oprtn: null,
            result: null,
        };
    }
    handleClick(event){
        if(this.state.oprtn == null){
            if((event.target.value) == '.'){
                if(this.state.nbr == 0){
                    this.setState({
                        nbr: (0 + event.target.value).toString(),
                    })

                }else if((this.state.nbr).indexOf('.') !== -1 ) {
                    return ;
                }
                else{
                    this.setState({
                        nbr: (this.state.nbr + (event.target.value)).toString(),
                    })
                    
                }
                
                console.log(this.state.nbr)
            }else if((event.target.value) == '/' ){
                this.setState({
                    nbr1: parseFloat(this.state.nbr), 
                    oprtn: '/',
                    nbr: parseFloat('0'),
                })
                
            }else if((event.target.value) == '*' ){
                this.setState({
                    nbr1: parseFloat(this.state.nbr), 
                    oprtn: '*',
                    nbr: parseFloat('0'),
                })
                
            }else if((event.target.value) == '-' ){
                this.setState({
                    nbr1: parseFloat(this.state.nbr), 
                    oprtn: '-',
                    nbr: parseFloat('0'),
                })
                
            }else if((event.target.value) == '+' ){
                this.setState({
                    nbr1: parseFloat(this.state.nbr), 
                    oprtn: '+',
                    nbr: parseFloat('0'),
                })
                
            }else{
                    this.setState({
                        nbr: (this.state.nbr + parseFloat(event.target.value)).toString(),
                    })
                    
            }
            
            
            
        }else if(this.state.oprtn != null){
            if((event.target.value) == '.'){
                if(this.state.nbr == 0){
                    this.setState({
                        nbr: (0 + event.target.value).toString(),
                    })

                }else if((this.state.nbr).indexOf('.') !== -1 ) {
                    return ;
                }
                else{
                    this.setState({
                        nbr: (this.state.nbr + (event.target.value)).toString(),
                    })
                    
               }
            }else if((event.target.value) == '/' ){
                console.log(this.state.nbr1)
                console.log(this.state.oprtn)
                if(this.state.oprtn == '/'){
                    this.setState({
                        result: (this.state.nbr1 / parseFloat(this.state.nbr)).toString(),
                        oprtn: '/',
                        nbr1: this.state.nbr1 / parseFloat(this.state.nbr),
                        nbr: 0,
                    })
                }else if(this.state.oprtn == '*'){
                    this.setState({
                        result: (this.state.nbr1 * parseFloat(this.state.nbr)).toString(),
                        oprtn: '/',
                        nbr1: this.state.nbr1 * parseFloat(this.state.nbr),
                        nbr: 0,
                    })
                }else if(this.state.oprtn == '-'){
                    this.setState({
                        result: (this.state.nbr1 - parseFloat(this.state.nbr)).toString(),
                        oprtn: '/',
                        nbr1: this.state.nbr1 - parseFloat(this.state.nbr),
                        nbr: 0,
                    })
                }else if(this.state.oprtn == '+'){
                    this.setState({
                        result: (this.state.nbr1 + parseFloat(this.state.nbr)).toString(),
                        oprtn: '/',
                        nbr1: this.state.nbr1 + parseFloat(this.state.nbr),
                        nbr: 0,
                    })
                }
                
                console.log(this.state.nbr1)
            }else if((event.target.value) == '*' ){
                console.log(this.state.nbr1)
                console.log(this.state.oprtn) 
                if(this.state.oprtn == '/'){
                    this.setState({
                        result: (this.state.nbr1 / parseFloat(this.state.nbr)).toString(),
                        oprtn: '*',
                        nbr1: this.state.nbr1 / parseFloat(this.state.nbr),
                        nbr: 0,
                    })
                }else if(this.state.oprtn == '*'){
                    this.setState({
                        result: (this.state.nbr1 * parseFloat(this.state.nbr)).toString(),
                        oprtn: '*',
                        nbr1: this.state.nbr1 * parseFloat(this.state.nbr),
                        nbr: 0,
                    })
                }else if(this.state.oprtn == '-'){
                    this.setState({
                        result: (this.state.nbr1 - parseFloat(this.state.nbr)).toString(),
                        oprtn: '*',
                        nbr1: this.state.nbr1 - parseFloat(this.state.nbr),
                        nbr: 0,
                    })
                }else if(this.state.oprtn == '+'){
                    this.setState({
                        result: (this.state.nbr1 + parseFloat(this.state.nbr)).toString(),
                        oprtn: '*',
                        nbr1: this.state.nbr1 + parseFloat(this.state.nbr),
                        nbr: 0,
                    })
                }
            }else if((event.target.value) == '-' ){
                console.log(this.state.nbr1)
                console.log(this.state.oprtn) 
                if(this.state.oprtn == '/'){
                    this.setState({
                        result: (this.state.nbr1 / parseFloat(this.state.nbr)).toString(),
                        oprtn: '-',
                        nbr1: this.state.nbr1 / parseFloat(this.state.nbr),
                        nbr: 0,
                    })
                }else if(this.state.oprtn == '*'){
                    this.setState({
                        result: (this.state.nbr1 * parseFloat(this.state.nbr)).toString(),
                        oprtn: '-',
                        nbr1: this.state.nbr1 * parseFloat(this.state.nbr),
                        nbr: 0,
                    })
                }else if(this.state.oprtn == '-'){
                    this.setState({
                        result: (this.state.nbr1 - parseFloat(this.state.nbr)).toString(),
                        oprtn: '-',
                        nbr1: this.state.nbr1 - parseFloat(this.state.nbr),
                        nbr: 0,
                    })
                }else if(this.state.oprtn == '+'){
                    this.setState({
                        result: (this.state.nbr1 + parseFloat(this.state.nbr)).toString(),
                        oprtn: '-',
                        nbr1: this.state.nbr1 + parseFloat(this.state.nbr),
                        nbr: 0,
                    })
                }
                
            }else if((event.target.value) == '+' ){
                console.log(this.state.nbr1)
                console.log(this.state.oprtn) 
                if(this.state.oprtn == '/'){
                    this.setState({
                        result: (this.state.nbr1 / parseFloat(this.state.nbr)).toString(),
                        oprtn: '+',
                        nbr1: this.state.nbr1 / parseFloat(this.state.nbr),
                        nbr: 0,
                    })
                }else if(this.state.oprtn == '*'){
                    this.setState({
                        result: (this.state.nbr1 * parseFloat(this.state.nbr)).toString(),
                        oprtn: '+',
                        nbr1: this.state.nbr1 * parseFloat(this.state.nbr),
                        nbr: 0,
                    })
                }else if(this.state.oprtn == '-'){
                    this.setState({
                        result: (this.state.nbr1 - parseFloat(this.state.nbr)).toString(),
                        oprtn: '+',
                        nbr1: this.state.nbr1 - parseFloat(this.state.nbr),
                        nbr: 0,
                    })
                }else if(this.state.oprtn == '+'){
                    this.setState({
                        result: (this.state.nbr1 + parseFloat(this.state.nbr)).toString(),
                        oprtn: '+',
                        nbr1: this.state.nbr1 + parseFloat(this.state.nbr),
                        nbr: 0,
                    })
                }
                
            }else if((event.target.value) == '=' ){
                if(this.state.oprtn == '/'){
                    this.setState({
                        result: (this.state.nbr1 / parseFloat(this.state.nbr)).toString(),
                        
                        nbr1: this.state.nbr1 / parseFloat(this.state.nbr),
                        nbr: 0,
                    })
                }else if(this.state.oprtn == '*'){
                    this.setState({
                        result: (this.state.nbr1 * parseFloat(this.state.nbr)).toString(),
                        
                        nbr1: this.state.nbr1 * parseFloat(this.state.nbr),
                        nbr: 0,
                    })
                }else if(this.state.oprtn == '-'){
                    this.setState({
                        result: (this.state.nbr1 - parseFloat(this.state.nbr)).toString(),
                        
                        nbr1: this.state.nbr1 - parseFloat(this.state.nbr),
                        nbr: 0,
                    })
                }else if(this.state.oprtn == '+'){
                    this.setState({
                        result: (this.state.nbr1 + parseFloat(this.state.nbr)).toString(),
                        
                        nbr1: this.state.nbr1 + parseFloat(this.state.nbr),
                        nbr: 0,
                    })
                }
            }else {
                this.setState({
                    result: null,
                    nbr: (this.state.nbr + parseFloat(event.target.value)).toString(),
                })
            }
        }
        if((event.target.value) == '+/-'){
            if(this.state.nbr == 0){
                this.setState({
                    oprtn: null,
                    nbr: (this.state.result * (-1)).toString(),
                });
            }else{
                this.setState({
                    nbr: (this.state.nbr * (-1)).toString(),
                });
            }
            
        }
        if((event.target.value) == '%'){
            if(this.state.nbr == 0){
                this.setState({
                    oprtn: null,
                    nbr: (this.state.result / (100)).toString(),
                });
            }else{
                this.setState({
                    nbr: (this.state.nbr / (100)).toString(),
                });
            }
        }
        if((event.target.value) == 'off'){
            this.setState({
                nbr1: null,
                nbr2: null,
                nbr: parseFloat('0'),
                oprtn: null,
                result: null,
            });
        }
       
    }
    render(){
        if(this.state.result != null){
            return(
                <div className="container-fluid">
                    <Screen value={this.state.result} />
                    <First_tablet onClick = {(event) => this.handleClick(event)} />
                </div>
                
            );
        }else{
            return(
                <div className="container-fluid">
                    <Screen value={this.state.nbr} />
                    <First_tablet onClick = {(event) => this.handleClick(event)} />
                </div>
                
            ); 
        }
    }
}


ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
)
