import clsx from "clsx"
import s from "./Container.module.css"

const Container = ({children, isHeader, isHero, isFeatures})=> {
return (
    <div className={clsx(s.container, isHeader && s.headerContainer, isHero && s.heroContainer, isFeatures && s.featuresContainer)}>
        {children}
    </div>
)
}
export default Container 

