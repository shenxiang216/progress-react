interface Props {
    nums: number
    data: number

}
interface State {
    bgColor: string
    progressColor: string
}
export default class Progress extends React.Component<Props> {
    state: State = {
        bgColor: '#000',
        progressColor: '#aaa'
    }

    renderProgress() {
        const progressItemStyle = {
            width: `${100 / this.props.nums}%`,
            height: '100%',
            lineHeight: '100%',
            padding: '0px 4px',
            fontWeight: 800,
            boxSizing: "border-box"
        };
        let progressItemLength = this.props.nums * (this.props.data / 100);
        var ele = [];
        for (let i = 0; i < progressItemLength; i++) {
            ele.push(
                <div
                    style={Object.assign(progressItemStyle, {
                        color: `rgb(${this.state.progressColor}`,
                    })}
                    key={i}
                >
                    /
            </div>,
            );
        }
        return ele;
    }
    componentDidMount() {
        if (this.props.data >= 90) {
            this.setState({ bgColor: '#BAEBD0', progressColor: '#2AC870' });
        } else if (this.props.data >= 80) {
            this.setState({ bgColor: '#D4E9FA', progressColor: '#2A7CFF' });
        } else if (this.props.data >= 60) {
            this.setState({ bgColor: '#D4E9FA', progressColor: '#00BFFF' });
        } else if (this.props.data >= 40) {
            this.setState({ bgColor: '#FAF5EE', progressColor: '#F5982C' });
        }
        else {
            this.setState({ bgColor: '#FFF5F5', progressColor: '#F45A59' });
        }
    }
    render() {
        const progressStyle = {
            display: 'flex',
            color: this.state.progressColor,
            margin: '10px',
        };

        const progressArticleStyle = {
            height: '18px',
            width: '500px',
            display: 'flex',
            borderRadius: '10px',
            overflow: 'hidden',
            color: this.state.progressColor,
            background: this.state.bgColor,
            border: `1px solid ${this.state.progressColor}`,
            boxSizing: "border-box"
        };

        return (
            <div style={progressStyle}>
                <div style={progressArticleStyle}>{this.renderProgress()}</div>
                <div style={{ marginLeft: '5px' }}>
                    {this.props.data}%
            </div>
            </div>
        );
    }
}
