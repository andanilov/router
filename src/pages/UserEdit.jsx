import { useParams } from "react-router-dom";
import Layout from "../layout";

const UserEdit = () => (<Layout>Edit page for user:&nbsp;<strong>{useParams().id}</strong></Layout>);
 
export default UserEdit;
