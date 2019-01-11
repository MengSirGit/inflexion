import React from 'react'

const Introduce = () => (
    <div className="introduce">
        <h3>简谱转调</h3>
        <article className="intro">
            <p style={{fontSize: '14px', marginBottom: '10px'}}>简谱格式规则（方便表达使用的表示方式）：</p>
            <p><strong>. 低音表示如：(1)，表示低音的 do ; 转换过程中如出现倍低音（半音阶口琴要16孔），则表示为：((1))</strong></p>
            <p><strong>. 中音正常数字表示，如：1, 2, #1, #2 </strong></p>
            <p><strong>. 高音表示如：[1]，表示高音的 do ; 转换过程中如出现倍高音（没遇过，也吹不出来），则表示为：[[1]]</strong></p>
            <p><strong>. # 表示为当前音基础上升半音，如：#2, (#2), [#2] </strong></p>
            <p><strong>. 此工具只转换唱名，节拍音长对照原谱</strong></p>
        </article>
        <article className="example">
            <p style={{fontSize: '14px', marginBottom: '10px'}}>以《雪之华》第一句为例：</p>
            <p><strong><span>(5) (5)</span><span>3 2 3 5 2 (5) (5)</span><span>(6) 1 1 (6) (5) 1 2</span></strong></p>
            <p><strong><span>3 2 3 6 5 3 3 3 3</span><span>4 3 2 1 3 2 2 (5)</span></strong></p>
        </article>
    </div>
)

export default Introduce