class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {homepage: localStorage['homepage'] || "Set up home page by adding #question to the url"}
    }
    //Navigate to the display you want
    goToScreen(screen){
        screens.setState({screen: screen});
    }
    render(){
        return (
            <div className="homepage">
                <div className="header">
                    <h2>TEST YOUR FIT WITH WORK AND BE THE WISER</h2>
                    Two self assessment tests will calibrate your fit with your workplace and your prospects for a fulfilling career. You will then be the wiser.
                </div>
                <div className="welcome_note" align="center">
                    <img src={'images/IconMYOM.png'} />
                    <h3>MY VIEW OF ME</h3>
                    The first is <b style={{color: 'purple'}}>My View of Me</b> - this measures the extent to which you have those traits and attributes that make for a great employee.
                    <br/>
                    <br/>
                    <img src={'images/IconOC.png'} />
                    <h3>THE ORGANIZATIONAL COLONOSCOPY</h3>
                    The second is <b style={{color: 'purple'}}>The Organizational Colonoscopy</b> - this measures the health of the organization in which you work.<br/>
                    Upon completion of each test you will be placed in the color-coded <b><i>Box of Fortune, Mid-fortune or Misfortune</i></b>. <span style={{color: 'green'}}>GREEN</span> is best: <span style={{color: '#b0b02e'}}>YELLOW</span> is cautionary: <span style={{color: 'red'}}>RED</span> is perilous.<br/>
                    <br/>
                    <img src={'images/IconResult.png'} />
                    <h3>FORTUNE, MID-FORTUNE or MISFORTUNE</h3>
                    Finally, when you have completed both tests you will find yourself in the <b><i>Circle of Fortune, Mid-fortune or Misfortune</i></b> which gives you an infographic of your happiness with your career <u>and</u> your workplace. <span style={{color: 'green'}}>GREEN on GREEN</span> is best whilst <span style={{color: 'red'}}>RED on RED</span> is dire. There are many other combinations that will be revealed and explained upon completion of both self-assessments.<br/><br/>
                    You will then know why you feel the way you do with both your career and your workplace. Most importantly you'll be able to focus on what you need to do to be happier in that space that can consume four decades of your life - WORK!<br/><br/>

                </div>
                <br/>
                <br/>
                <button onClick={()=> this.goToScreen(2)} className="btn btn-info my-btn"> BEGIN </button>
            </div>
        );
    }
}
