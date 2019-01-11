/**
 * 对value进行筛选处理
 * 区分出低音、中音、高音及各自的升度
 * @param {文本域value} con 
 */

import inflexionAction from './inflexionAction'

function handleVal(con, valF, valS) {
    // 提示语
    let promptWord = null
    // 转调后音名
    let inflexionMode = []
    // 空格匹配、指定内容以外内容匹配
    let spaceReg = /\s+/gi, accident = /([^#()[\]1-7])/g
    // 内容去除空格
    const conCompress = con.replace(spaceReg, '')
    // 出现非法内容时跳出执行
    if (conCompress.match(accident) !== null) {
        promptWord = ' 包含不符合要求的字符串！！！'
        return {
            promptWord: promptWord,
            inflexionMode: inflexionMode
        }
    }

    Array.from(conCompress).map((e, i, arr) => {
        let _backMode
        // 低音判断
        if (e === '(' && arr[i + 1] !== '#') {
            if (typeof (arr[i + 1] * 1) === 'number' && arr[i + 2] !== ')') promptWord = '存在低音不完整'
            // console.log(`低音区: ${arr[i + 1]}`)
            _backMode = inflexionAction(valF, valS, arr[i + 1], 'low')
        }
        else if (e === '(' && arr[i + 1] === '#') {
            if (arr[i + 2] === '3' || arr[i + 2] === '7') promptWord = '#3或#7音名不存在'
            if (typeof (arr[i + 2] * 1) === 'number' && arr[i + 3] !== ')') promptWord = '存在低音不完整'
            // console.log(`低音区(升): ${arr[i + 1]}${arr[i + 2]}`)
            _backMode = inflexionAction(valF, valS, `${arr[i + 1]}${arr[i + 2]}`, 'low')
        }
        // 中音判断
        else if (
            e === '#' &&  
            e !== '(' && 
            e !== ')' && 
            e !== '[' && 
            e !== ']' &&
            typeof (arr[i + 1] * 1) === 'number' && 
            arr[i + 2] !== ')' &&
            arr[i + 2] !== ']'
        ) {
            if (arr[i + 1] === '3' || arr[i + 1] === '7') promptWord = '#3或#7音名不存在'
            // console.log(`中音区(升): ${arr[i]}${arr[i + 1]}`)
            _backMode = inflexionAction(valF, valS, `${arr[i]}${arr[i + 1]}`, 'middle')
        }
        else if (
            e !== '#' &&  
            e !== '(' && 
            e !== ')' && 
            e !== '[' && 
            e !== ']' &&
            typeof (e * 1) === 'number' &&
            arr[i + 1] !== ')' && 
            arr[i + 1] !== ']' && 
            arr[i - 1] !== '#'
        ) {
            // console.log(`中音区: ${arr[i]}`)
            _backMode = inflexionAction(valF, valS, arr[i], 'middle')
        }
        // 高音判断
        else if (e === '[' && arr[i + 1] !== '#') {
            // console.log(`高音区: ${arr[i + 1]}`)
            if (typeof (arr[i + 1] * 1) === 'number' && arr[i + 2] !== ']') promptWord = '存在高音不完整'
            _backMode = inflexionAction(valF, valS, arr[i + 1], 'high')
        }
        else if (e === '[' && arr[i + 1] === '#') {
            if (arr[i + 2] === '3' || arr[i + 2] === '7') promptWord = '#3或#7音名不存在'
            if (typeof (arr[i + 2] * 1) === 'number' && arr[i + 3] !== ']') promptWord = '存在高音不完整'
            // console.log(`高音区(升): ${arr[i + 1]}${arr[i + 2]}`)
            _backMode = inflexionAction(valF, valS, `${arr[i + 1]}${arr[i + 2]}`, 'high')
        }

        if (_backMode) inflexionMode.push(_backMode)

        return true
    })

    return {
        promptWord: promptWord,
        inflexionMode: inflexionMode,
    }
}

export default handleVal