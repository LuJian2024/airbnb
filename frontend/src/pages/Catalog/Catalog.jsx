import { useParams } from "react-router-dom";
import Tabs from "../../components/Tabs/Tabs";
import InfoCard from "../../components/InfoCard/InfoCard";


const Catalog = () => {

    // 从 URL 中获取 tabID 和 page 参数
    const { tabID, page } = useParams();

    // 传递 tabID 和 page 参数到 Tabs 组件
    return (
        <div>
            <Tabs initialTabID={parseInt(tabID, 10)} initialPage={parseInt(page, 10)} />
            <InfoCard />
        </div>
    );
}

export default Catalog;
