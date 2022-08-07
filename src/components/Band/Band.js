import React, {Component} from 'react';
import BandMemberList from './BandList/BandList';
import BandContent from './BandContent/BandContent';

class Band extends Component {
    constructor (props) {
        super(props);
        this.state = bandComponent;
    };
    
    render () {
        return (
            <div id="band" className="content-sections">
                <BandContent bandContent={ this.state.bandContent}/>
                <BandMemberList bandMemberList={ this.state.bandMemberList}/>        
            </div>
        );
    }
}

const bandComponent = {
    bandContent: {
        bandHeading: 'THE BAND',
        bandSubHeading: 'We love music',
        bandAboutText: `We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.`,
      },
      bandMemberList: [
        {
          idMember: 1,
          nameMember: 'Name 1',
          imgMember: '../../assets/img/band-member/member1.jpg',
        },
        {
          idMember: 2,
          nameMember: 'Name 2',
          imgMember: '../../assets/img/band-member/member1.jpg',
        },
        {
          idMember: 3,
          nameMember: 'Name 3',
          imgMember: '../../assets/img/band-member/member1.jpg',
        },
      ],
    
}

export default Band;