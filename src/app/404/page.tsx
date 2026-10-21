import NotFoundPage from '../../features/site-templates/catalog/recueil/pages/NotFoundPage'
/** 显式注册演示页，避免生产服务把保留路径交给内置错误页。 */
export default function ErrorDemo(){return <div data-template="recueil" lang="zh-CN"><NotFoundPage locale="zh" basePath="" /></div>}
