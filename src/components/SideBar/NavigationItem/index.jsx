import styled from "styled-components";
const StylizedListItem = styled.li`
    font-size:24px;
    line-height:29px;
    margin-bottom:30px;
    cursor: pointer;
    color:${props => props.$active ? '#7B78E5' : '#D9D9D9'};
    font-family:${props => props.$active ? 'GandhiSansBold' : 'GandhiSansRegular'};
    display:flex;
    align-items:center;
    gap:22px;
`

const NavigationItem = ({children, activeIcon, inactiveIcon, active = false}) => {
    return (
        <StylizedListItem $active={active}>
            <img src={active ? activeIcon : inactiveIcon} alt=""/>
            {children}
        </StylizedListItem>
    )
}
export default NavigationItem;