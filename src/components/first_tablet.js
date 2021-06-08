import React from 'react';
import ReactDOM from 'react-dom';
import './components.css';

export default class First_tablet extends React.Component {
    render (){
        return(
            <section>
                <div className="first_tablet">
                    <div className="row">
                        <div className="col">
                            <button className="btn btn-light" type="button" value="off" onClick={(event) => this.props.onClick(event)}>AC</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-light " type="button" value="+/-" onClick={(event) => this.props.onClick(event)}>+/-</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-light " type="button" value="%" onClick={(event) => this.props.onClick(event)}>%</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-warning " type="button" value="/" onClick={(event) => this.props.onClick(event)}>/</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button className="btn btn-light" type="button" value="7" onClick={(event) => this.props.onClick(event)}>7</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-light " type="button" value="8" onClick={(event) => this.props.onClick(event)}>8</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-light " type="button" value="9" onClick={(event) => this.props.onClick(event)}>9</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-warning " type="button" value="*" onClick={(event) => this.props.onClick(event)}>x</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button className="btn btn-light " type="button" value="4" onClick={(event) => this.props.onClick(event)}>4</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-light " type="button" value="5" onClick={(event) => this.props.onClick(event)}>5</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-light " type="button" value="6" onClick={(event) => this.props.onClick(event)}>6</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-warning " type="button" value="-" onClick={(event) => this.props.onClick(event)}>-</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button className="btn btn-light " type="button" value="1" onClick={(event)=> this.props.onClick(event)}>1</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-light " type="button"  value="2" onClick={(event) => this.props.onClick(event)} >2</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-light " type="button" value="3" onClick={(event) => this.props.onClick(event)}>3</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-warning " type="button" value="+" onClick={(event) => this.props.onClick(event)}>+</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-6">
                            <button className="btn btn-light " type="button" value="0" onClick={(event)=> this.props.onClick(event)}>0</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-light " type="button" value="." onClick={(event)=> this.props.onClick(event)}>.</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-warning " type="button" value="=" onClick={(event)=> this.props.onClick(event)}>=</button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}