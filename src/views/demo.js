import React from 'react';
import {WidthProvider, Responsive} from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);
import _ from "lodash";

export default class Demo extends React.Component {

    static defaultProps = {
        cols: {lg: 18, md: 10, sm: 6, xs: 4, xxs: 2},
        rowHeight: 20,
        breakpoints: {lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0},

    };

    constructor() {
        super();
        this.state = {
            themeColor: '#fff',
            doms:null
        }
    }

    componentDidMount() {
        let arr=generateLayout()
  let doms=    arr.map(l=>{

            return (
                <div style={{background:'pink'}} key={l.i} data-grid={l}>
                    {l.i}
                </div>

            )

        })

        this.setState({doms})
    }

    render() {
        return (
            <ResponsiveReactGridLayout
                style={{background: this.state.themeColor, height: "100vh"}}
                useCSSTransforms={true}
                {...this.props}
                onDrop={this.onDrop}
                isDroppable={true}

            >
                {this.state.doms}
            </ResponsiveReactGridLayout>
        )
    }

}

function generateLayout() {
    return _.map(_.range(0, 25), function(item, i) {
        var y = Math.ceil(Math.random() * 4) + 1;
        return {
            x: Math.round(Math.random() * 5) * 2,
            y: Math.floor(i / 6) * y,
            w: 2,
            h: y,
            i: i.toString(),
            static: Math.random() < 0.05
        };
    });
}
