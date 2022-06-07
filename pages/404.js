import Link from "next/link";
import Metatags from "../components/Metatags";

export default function Custom404() {
    return (
        <main>
            <Metatags title="404 Page Not Found" description="Page not found" />
            <h1>404 - That page does not seem to be exists...</h1>
            <iframe src="https://giphy.com/embed/l2SpZkQ0XT1XtKus0" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            <Link href="/">
                <button className="btn-blue">
                    Go home
                </button>
            </Link>
        </main>
    )
}