import Link from 'next/link';

export default function ButtonLink({linkObj, sectionClassName}) {

    return (
        <div className={`FP-${sectionClassName}-links`}>
            {linkObj.map((link, index) => (
                <Link
                    key={index}
                    href={link.url}
                    // target="_"
                    rel="noopener noreferrer"
                    className={`FP-${sectionClassName}-links ${link.className}`}
                >
                    {link.text}
                </Link>
            ))}
        </div>
    );
}