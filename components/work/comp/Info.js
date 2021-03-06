import Link from 'next/link'

const Info = ({ Name, description, built_in, git_repo, website_url }) => {
    return (
        <div className="text-white">
            <h2 className="text-8xl">{Name}</h2>

            <p className="my-3">{built_in}</p>
            {git_repo ? (
                <Link 
                href={`${git_repo}`}
                >
                    <a 
                    className="inline-block mb-2"
                    target="_blank"
                    >
                        Git Repo
                    </a>
                </Link>
            ) : null}

            <p>{description}</p>
            
            {website_url ? (
                <Link href={`${website_url}`}><a className="my-4 web-button" target="_blank">Web Site</a></Link>
            ) : null}
        </div>
    );
}
 
export default Info;