import { FC } from "react"
import { Frame, InFrame } from "./style"
import FilterComponent from "../FilterComponent"

const MobileFilter: FC = () => {
    return (
        <Frame id="mobile-filter">
            <InFrame>
                <FilterComponent id="mobile-filter" />
            </InFrame>
        </Frame>
    )
}

export default MobileFilter