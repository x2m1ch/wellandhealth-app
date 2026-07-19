import { ComparePlans } from "./sections/ComparePlans"
import { FlexiblePlans } from "./sections/FlexiblePlans"

export const PricingPage = () => {
    return (
        <section className="app-pages">
            <FlexiblePlans />
            <ComparePlans />
        </section>
    )
}