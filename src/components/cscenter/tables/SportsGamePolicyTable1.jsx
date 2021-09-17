import React from 'react'

const SportsGamePolicyTable1 = () => {

    const Cell = ({
        type, 
        typeColor, 
        overtime, 
        ruleText, 
        ruleText2 = null
    }) => (
        <tr className={`${ruleText2 ? "h-73px" : "h-56px"} bg-gray-fefefe rounded-3xl font-spoqaMedium text-14px tracking-tight text-gray-r585858  w-full border-b border-gray-dddddd`}>
            <td style={{width: "162px", color: typeColor}} className=" font-spoqaBold w-235px h-56px text-center">{type}</td>
            <td style={{width: "86px", color: overtime ? "#dbae00" : "#585858"}} className="font-spoqaBold h-56px text-center">{overtime ? "연장제외" : "연장없음"}</td>
            <td style={{width: "792px"}} className="h-56px pl-20px -space-y-4px">
                <p>{ruleText}</p>
                <p>{ruleText2}</p>
            </td>
        </tr>
    )

    return (
        <table className="shadow-subNavbar rounded-3xl overflow-hidden">
            <thead className="bg-gray-fafafa rounded-3xl font-spoqaBold text-14px tracking-tight text-gray-r454545 h-56px border-b border-gray-dddddd">
                <tr>
                    <td style={{width: "162px"}} className="text-center">베팅타입</td>
                    <td style={{width: "86px"}} className="w-170px text-center">적용시간</td>
                    <td style={{width: "792px"}} className="w-170px text-center">베팅룰</td>
                </tr>
            </thead>
            <tbody className="w-full text-585858 text-14px tracking-tight font-spoqaMedium">
                <Cell type="승무패" typeColor="#0056a6" overtime={true} ruleText="승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식" />           
                <Cell type="승무패 (전반전)" typeColor="#0056a6" overtime={false} ruleText="전반전만의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식" />           
                <Cell type="승무패 (후반전)" typeColor="#0056a6" overtime={false} ruleText="후반전만의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식" />           
                <Cell type="승패 (무X)" typeColor="#0056a6" overtime={false} ruleText="승리가 예상되는 팀을 선택하여 베팅하는 방식 (무승부 적중특례)" />           
                <Cell type="승패 (무X)(전반전)" typeColor="#0056a6" overtime={false} ruleText="전반전만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식 (무승부 적중특례)" />           
                <Cell type="승패 (무X)(후반전)" typeColor="#0056a6" overtime={false} ruleText="후반전만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식 (무승부 적중특례)" />           
                <Cell type="무실점 완승" typeColor="#0056a6" overtime={true} ruleText="무실점으로 승리가 예상되는 팀을 선택하여 베팅하는 방식 (상대팀 무득점이어야 함)" />           
                <Cell type="전반 & 전후반" typeColor="#0056a6" overtime={true} ruleText="전반전만의 결과와 최종(전후반포함) 각각의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식" />           
                <Cell type="더블찬스" typeColor="#0056a6" overtime={true} ruleText="두개의 결과를 예측하여 베팅하는 방식" />           
                <Cell type="더블찬스 (전반전)" typeColor="#0056a6" overtime={false} ruleText="전반전만의 양팀이 득점한 경기결과로 두개의 결과를 예측하여 베팅하는 방식" />           
                <Cell type="더블찬스 (후반전)" typeColor="#0056a6" overtime={false} ruleText="후반전만의 양팀이 득점한 경기결과로 두개의 결과를 예측하여 베팅하는 방식" />           
                <Cell 
                    type="핸디캡" 
                    typeColor="#905a12" 
                    overtime={true} 
                    ruleText= "상대적으로 전력이 우수한 팀에게 불리한 조건을 주어 경기의 균형을 맞추고 승리가 예상되는 팀을 선택하여 베팅하는 방식 홈팀(왼쪽)" 
                    ruleText2= "기준으로 +, -의 핸디캡 기준점수가 표기됨" 
                />    
                <Cell type="핸디캡 (전반전)" typeColor="#905a12" overtime={false} ruleText= "핸디캡을 적용하여 전반전만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식" />            
                <Cell type="핸디캡 (후반전)" typeColor="#905a12" overtime={false} ruleText= "핸디캡을 적용하여 후반전만의 양팀이 득점한 경기결과로 승리가 예상되는 팀을 선택하여 베팅하는 방식" />            
                <Cell type="핸디캡 승무패" typeColor="#905a12" overtime={false} ruleText= "핸디캡을 적용하여 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식" />            
                <Cell type="핸디캡 승무패 (전반전)" typeColor="#905a12" overtime={false} ruleText= "핸디캡을 적용하여 전반전만의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식" />            
                <Cell type="핸디캡 승무패 (후반전)" typeColor="#905a12" overtime={false} ruleText= "핸디캡을 적용하여 후반전만의 양팀이 득점한 경기결과로 승리가 예상되는 팀 또는 무승부를 선택하여 베팅하는 방식" />            
                <Cell type="언더오버" typeColor="#75942d" overtime={true} ruleText= "양팀의 최종 득점의 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식" />            
                <Cell type="언더오버 (전반전)" typeColor="#75942d" overtime={false} ruleText= "전반전만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식" />            
                <Cell type="언더오버 (후반전)" typeColor="#75942d" overtime={false} ruleText= "후반전만의 양팀이 득점한 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식" />            
                <Cell type="홀짝" typeColor="#b538d6" overtime={true} ruleText= "양팀의 최종 득점의 합이 기준점 보다 높고 낮음을 예상하여 베팅하는 방식" />            
                <Cell type="홀짝 (전반전)" typeColor="#b538d6" overtime={false} ruleText= "전반전만의 양팀이 득점한 합이 홀 또는, 짝으로 예상하여 베팅하는 방식" />            
                <Cell type="홀짝 (후반전)" typeColor="#b538d6" overtime={false} ruleText= "후반전만의 양팀이 득점한 합이 홀 또는, 짝으로 예상하여 베팅하는 방식" />            
                <Cell type="양팀득점" typeColor="#2d6da8" overtime={true} ruleText= "경기결과 양팀모두 득점이 있음 또는 없음을 예측하여 배팅하는 방식" />            
                <Cell type="양팀득점 (전반전)" typeColor="#2d6da8" overtime={false} ruleText= "전반전만의 경기결과 양팀모두 득점이 있음 또는 없음을 예측하여 베팅하는 방식" />            
                <Cell type="양팀득점 (후반전)" typeColor="#2d6da8" overtime={false} ruleText= "후반전만의 경기결과 양팀모두 득점이 있음 또는 없음을 예측하여 베팅하는 방식" />            
                <Cell type="점수합계~" typeColor="#ff4800" overtime={true} ruleText= "경기결과 양팀에서 발생한 득점의 합(~이상)을 예측하여 베팅하는 방식" />            
                <Cell type="점수합계~(전반전)" typeColor="#ff4800" overtime={false} ruleText= "전반전만의 경기결과로 양팀에서 발생한 득점의 합(~이상)을 예측하여 베팅하는 방식" />            
                <Cell type="점수합계~(후반전)" typeColor="#ff4800" overtime={false} ruleText= "후반전만의 경기결과로 양팀에서 발생한 득점의 합(~이상)을 예측하여 베팅하는 방식" />            
                <Cell type="점수합계" typeColor="#ff4800" overtime={true} ruleText= "경기결과 양팀에서 발생한 득점의 합을 정확히 예측하여 베팅하는 방식" />            
                <Cell type="점수합계 (전반전)" typeColor="#ff4800" overtime={false} ruleText= "전반전만의 경기결과로 양팀에서 발생한 득점의 합을 정확히 예측하여 베팅하는 방식" />            
                <Cell type="점수합계 (후반전)" typeColor="#ff4800" overtime={false} ruleText= "후반전만의 경기결과로 양팀에서 발생한 득점의 합을 정확히 예측하여 베팅하는 방식 " />            
                <Cell type="최고득점구간" typeColor="#75943a" overtime={true} ruleText= "경기중 최고 많은 득점이 발생 할 구간(전,후반)을 예측하여 베팅하는 방식(두개 이상의 동일한 최고득점 구간이 발생할 경우 적특저리)" />            
                <Cell type="스코어" typeColor="#b538d6" overtime={true} ruleText= "양팀의 경기 결과에 대한 최종 스코어를 정확하게 예상하여 베팅하는 방식" />            
                <Cell type="스코어 (전반전)" typeColor="#b538d6" overtime={false} ruleText= "전반전만의 양팀의 경기 결과에 대한 최종 스코어를 정확하게 예상하여 베팅하는 방식" />            
                <Cell type="스코어 (후반전)" typeColor="#b538d6" overtime={false} ruleText= "후반전만의 양팀의 경기 결과에 대한 최종 스코어를 정확하게 예상하여 베팅하는 방식" />            

            </tbody>
        </table>     
    )
}

export default SportsGamePolicyTable1
