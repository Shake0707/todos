import { FC } from "react"
import { Frame, InFrame } from "./style"
import Filter from "../Filter"

const MobileFilter: FC = () => {
    return (
        <Frame id="mobile-filter">
            <InFrame>
                <Filter id="mobile-filter" />
            </InFrame>
        </Frame>
    )
}

export default MobileFilter