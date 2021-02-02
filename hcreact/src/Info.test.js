import { shallow } from "enzyme";
// import HighChart from './HighChart';

it("renders Info component without crashing", ()=>{
  shallow(<Info />)
})

// it("renders Info header", ()=>{
//   const wrapper = shallow(<Info />)
//   const info = <h1>Info header</h1>
//   expect(wrapper.contains(info).toEqual(true))
// })