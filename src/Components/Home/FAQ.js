import React from 'react';
import Faq from 'react-faq-component'
import './Styles/FAQ.css'

function FAQ(props) {
    const styles = {
        bgColor: 'rgba(255,0,0,0)',
        titleTextColor: "#354E57",
        rowTitleColor: "Black",
        rowTitlePadding: "10px 20px",
        rowContentColor: 'grey',
    };

    const config = {
        animate: true,
        tabFocus: true
    };
    const data = {
        rows: [
            {
                title: "Lorem ipsum dolor sit amet,",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
                  ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
                  In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
                  Fusce sed commodo purus, at tempus turpis.`,
            },
            {
                title: "Nunc maximus, magna at ultricies elementum",
                content:
                    "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
            },
            {
                title: "Curabitur laoreet, mauris vel blandit fringilla",
                content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
                Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
                Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
                Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
            },
            {
                title: "What is the package version",
                content: <p>current version is 1.2.1</p>,
            },
        ],
    };
    return (
        <>
            <div className="frequent-ask-que">
                <h2>Frequently Asked Questions</h2>
                <Faq
                    data={data}
                    styles={styles}
                    config={config}
                    data-aos="fade-up"
                />
            </div>
        </>
    );
}

export default FAQ;