import React, { Component } from 'react';
import './components.css';

export default class Screen extends React.Component{

    render(){
        return(
            <section>
                    <div className="row screens">
                        <div className="col">
                            <h1>{this.props.value}</h1>
                        </div>
                    </div>
            </section>
        );
    };
}

