/**
 * 根据用户选择进行音调转换
 * @param{曲子目标调式} goalMode
 * @param{曲子当前调式} currentMode
 * @param{转换所需差值} D_value
 * @param{syllable所处的索引位置} modePos
 * @param{计算后的音名所处位置索引} modeRightPos
 * modeRightPos >= 12 时, 索引位置为高音区 commonModule[modeRightPos  - 12]
 * modeRightPos < 0 时, 索引位置为低音区 commonModule[commonModule.length + modeRightPos]
 */

import * as Module from './inflexionModule'

function inflexionAction(valF, valS, syllable, type) {
    let commonModule = Module.commonModule, modeIndex = Module.modeIndex
    
    let goalMode = modeIndex.indexOf(valS), currentMode = modeIndex.indexOf(valF)

    let D_value = goalMode - currentMode

    let modePos = commonModule.indexOf(syllable)

    let modeRightPos = modePos - D_value

    // 低音匹配
    if (type === 'low') {
        if (modeRightPos >= 12) {
            // console.log(`中音: ${commonModule['middle'][modeRightPos - 12]}`)
            return commonModule[modeRightPos - 12]
        }
        else if (modeRightPos < 0) {
            // console.log(`低低音: ${commonModule['low'][commonModule['low'].length + modeRightPos]}`)
            return `((${commonModule[commonModule.length + modeRightPos]}))`
        }
        else {
            // console.log(`低音: ${commonModule[type][modePos - D_value]}`)
            return `(${commonModule[modePos - D_value]})`
        }
    }
    // 中音匹配
    else if (type === 'middle') {
        if (modeRightPos >= 12) {
            // console.log(`高音: ${commonModule['high'][modeRightPos - 12]}`)
            return `[${commonModule[modeRightPos - 12]}]`
        }
        else if (modeRightPos < 0) {
            // console.log(`低音: ${commonModule['low'][commonModule['low'].length + modeRightPos]}`)
            return `(${commonModule[commonModule.length + modeRightPos]})`
        }
        else {
            // console.log(`中音: ${commonModule[type][modePos - D_value]}`)
            return commonModule[modePos - D_value]
        }
    }
    // 高音匹配
    else if (type === 'high') {
        if (modeRightPos >= 12) {
            // console.log(`高高音: ${commonModule['high'][modeRightPos - 12]}`)
            return `[[${commonModule[modeRightPos - 12]}]]`
        }
        else if (modeRightPos < 0) {
            // console.log(`中音: ${commonModule['middle'][commonModule['low'].length + modeRightPos]}`)
            return commonModule[commonModule.length + modeRightPos]
        }
        else {
            // console.log(`高音: ${commonModule[type][modePos - D_value]}`)
            return `[${commonModule[modePos - D_value]}]`
        }
    }
    else {
        new Error('未知错误！')
    }

}

export default inflexionAction