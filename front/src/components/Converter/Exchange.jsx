const Exchange=({textLabel, ...props})=>(
<>
  <input type="number" className="form-control" {...props}/>
  <span className="input-group-text converter-span">{textLabel? textLabel:'coin'}</span>
</>
)
export default Exchange
