import React, {Component} from 'react';
import { Reveal } from 'react-reveal';

class SectionTitleTwo extends Component {
    render(){
        let {tCenter, stitle, btitle} = this.props;
        return(
            <div className={`section_title_two ${tCenter}`}>
                <h6 style={{color:"#0db3c7"}}>{stitle}</h6>
                <h2 style={{color:"#0db3c7"}}>{btitle}</h2>
                <Reveal effect="fadeInLeft" duration={2000}>
          <span className="bottom_line"></span>
        </Reveal>
            </div>
        )
    }
}

export default SectionTitleTwo;