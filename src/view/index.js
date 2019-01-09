import React, { Component } from 'react'
import handleVal from './handleVal'

class Inflexion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectValueFirst: 'B',
            selectValueSecond: 'C' 
        }
        this.handleOptionValue1 = this.handleOptionValue1.bind(this)
        this.handleOptionValue2 = this.handleOptionValue2.bind(this)
        this.handleInflexion = this.handleInflexion.bind(this)
    }

    handleOptionValue1(val) {
        this.setState({
            selectValueFirst: val
        })
    }

    handleOptionValue2(val) {
        this.setState({
            selectValueSecond: val
        })
    }

    handleInflexion(con) {
        handleVal(con, this.state.selectValueFirst, this.state.selectValueSecond)
    }

    render() {
        return (
            <React.Fragment>
                <textarea id="inflexion-t" autoFocus ref="inflexion_t"></textarea>
                <select value={this.state.selectValueFirst} onChange={ (e) => this.handleOptionValue1(e.target.value) }>
                    <option value="G">G调</option>
                    <option value="Ab">Ab调</option>
                    <option value="A">A调</option>
                    <option value="Bb">Bb调</option>
                    <option value="B">B调</option>
                    <option value="C">C调</option>
                    <option value="Db">Db调</option>
                    <option value="D">D调</option>
                    <option value="Eb">Eb调</option>
                    <option value="E">E调</option>
                    <option value="F">F调</option>
                    <option value="F#">F#调</option>
                </select>
                <select value={this.state.selectValueSecond} onChange={ (e) => this.handleOptionValue2(e.target.value) }>
                    <option value="G">G调</option>
                    <option value="Ab">Ab调</option>
                    <option value="A">A调</option>
                    <option value="Bb">Bb调</option>
                    <option value="B">B调</option>
                    <option value="C">C调</option>
                    <option value="Db">Db调</option>
                    <option value="D">D调</option>
                    <option value="Eb">Eb调</option>
                    <option value="E">E调</option>
                    <option value="F">F调</option>
                    <option value="F#">F#调</option>
                </select>
                <button id="inflexion-btn" onClick={ () => this.handleInflexion(this.refs.inflexion_t.value) }>转调</button>
                <div className="output">
                    
                </div>
            </React.Fragment>
        )
    }
}

export default Inflexion