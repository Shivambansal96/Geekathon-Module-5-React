import "./Chart.css";

// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {
    Radar,
    RadarChart,
    PolarGrid,
    Legend,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
} from "recharts";

// import {
//     ResponsiveContainer,
//     ComposedChart,
//     Line,
//     Area,
//     Bar,
//     XAxis,
//     YAxis,
//     CartesianGrid,
//     Tooltip,
//     Legend,
// } from "recharts";




function Chart(props) {
    const data = [
        { name: "Jan", Total: 100 },
        { name: "Feb", Total: 200 },
        { name: "March", Total: 300 },
        { name: "April", Total: 400 },
        { name: "May", Total: 500 },
        { name: "June", Total: 600 },
        { name: "July", Total: 700 },
        { name: "Aug", Total: 800 },
        { name: "Sep", Total: 900 },
        { name: "Oct", Total: 1000 },
        { name: "Nov", Total: 1100 },
        { name: "Dec", Total: 1200 },
    ];

    return (
        <div id="chart">
            <div className="title">{props.title}</div>                                                    
            {/* <AreaChart
                width={730}
                height={250}
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
                <defs>
                <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area
                    type="monotone"
                    dataKey="Total"
                    stroke="#8884d8"
                    fillOpacity={1}
                    fill="url(#total)"
                />
                <Area
                    type="monotone"
                    dataKey="pv"
                    stroke="#82ca9d"
                    fillOpacity={1}
                    fill="url(#colorPv)"
                />
            </AreaChart> */}

            {/* <ResponsiveContainer width="100%" aspect={2/1}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="name" />
                <PolarRadiusAxis angle={30} domain={[0, 10000]} />
                <Radar name='Total' dataKey="Total" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Radar name={data.amount} dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                <Legend />
            </RadarChart>
        </ResponsiveContainer> */}

        <ResponsiveContainer width="100%" aspect={props.aspect}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="name" />
                <PolarRadiusAxis />
                <Radar name="Mike" dataKey="Total" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            </RadarChart>
        
        </ResponsiveContainer>

            {/* <ResponsiveContainer width="100%" aspect={2 / 1}>
                <ComposedChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                </ComposedChart>
            </ResponsiveContainer> */}
        </div>
    );
}

export default Chart;
