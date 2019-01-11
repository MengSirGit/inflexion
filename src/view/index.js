import React, { Component } from 'react'

import Introduce from './introduce'
import handleVal from './handleVal'

class Inflexion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // 默认调式
            selectValueFirst: 'B',
            // 默认目标调式
            selectValueSecond: 'C' ,
            // 提示信息
            promptWord: null,
            // 调式转换完毕数据
            inflexionMode: []
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
        let {promptWord, inflexionMode} = handleVal(con, this.state.selectValueFirst, this.state.selectValueSecond)
        console.log(promptWord, inflexionMode)

        this.setState({
            promptWord: promptWord,
            inflexionMode: inflexionMode
        })
    }

    render() {
        let inflexionMode = this.state.inflexionMode

        return (
            <React.Fragment>
                <Introduce />
                <div className="inflexion-box">
                    <textarea id="inflexion-t" autoFocus ref="inflexion_t" placeholder="请输入简谱..."></textarea>
                    <div className="inflexion-ctrl">    
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
                        <p style={{
                            textAlign: 'center',
                            marginBottom: '50px',
                            fontSize: '14px',
                            color: '#8d8d8d'
                        }}>转</p>
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
                        <button id="inflexion-btn" onClick={ () => this.handleInflexion(this.refs.inflexion_t.value) }>转 调</button>
                    </div>
                    <div className="output">
                    {
                        this.state.promptWord !== null ? 
                            <p className="prompt-line">{this.state.promptWord}</p> :
                            <article className="inflexion-article">
                            {
                                inflexionMode.length > 0 ? 
                                    inflexionMode.map((e, i) => {
                                        return (
                                            <span key={i}>{e}</span>
                                        )
                                    })
                                :
                                    false
                            }
                            </article>
                    }
                    </div>
                </div>
                <p style={{
                    fontSize: '12px',
                    lineHeight: 2,
                    marginTop: '15px',
                    color: '#8d8d8d'
                }}>以我为例（半音阶口琴），平时在找歌谱时，有时会不是自己想要的调式（C调对我而言最适合），需要手动转调。这点比较麻烦，如果对十二平均律不是很熟悉的话，很容易出错。
                这也是制作简谱转调的初衷，类似的工具网上也有，但不多。且有些不能用或不好用。
                </p>
            </React.Fragment>
        )
    }
}

export default Inflexion