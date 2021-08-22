
import { Helmet } from "react-helmet";

export default ({
    title,
    description,
    canonical
}) => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <meta name="author" content="Piyanos Software" />
            {title && <title>{title}</title>}
            {canonical && <link rel="canonical" href={canonical} />}
            {description && <meta name="description" content={description} />}
        </Helmet>
    );
}
