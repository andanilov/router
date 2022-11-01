import { useParams } from "react-router-dom";
import Layout from "../layout";

const User = () => (<Layout>User Page:&nbsp;<strong>{useParams().id}</strong></Layout>);
 
export default User;
