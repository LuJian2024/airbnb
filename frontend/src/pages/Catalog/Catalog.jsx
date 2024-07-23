import { useParams } from "react-router-dom";
import Tabs from "../../components/Tabs/Tabs";
import InfoCard from "../../components/InfoCard/InfoCard";
import { catalogCardLists } from "../../assets/catalogsdata/catalogsdata";
import './Catalog.css'
const Catalog = () => {

    // 从 URL 中获取 tabID 和 page 参数
    const { tabID, page } = useParams();

    // 传递 tabID 和 page 参数到 Tabs 组件
    return (
        <div>
            <Tabs initialTabID={parseInt(tabID, 10)} initialPage={parseInt(page, 10)} />
            <div className="catalog-container">
                {catalogCardLists.map((catalogList, i) =>
                    <InfoCard key={i} catalogList={catalogList} />
                )}
            </div>

        </div>
    );
}

export default Catalog;
