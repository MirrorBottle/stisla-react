import React from 'react'
import { components_articles as articles } from 'data.js';
import { ArticleOne, ArticleTwo, ArticleThree } from '../../components/ArticleComponent';

export default function Article() {
    return (
        <React.Fragment>
            <h2 className="section-title">Articles</h2>
            <p className="section-lead">This article component is based on card and flexbox.</p>
            <div className="row">
                {articles.style_a.map(article => (
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                        <ArticleOne {...article} />
                    </div>
                ))}
            </div>
            <h2 class="section-title">Article Style B</h2>
            <div className="row">
                {articles.style_b.map(article => (
                    <div className="col-12 col-sm-6 col-lg-3">
                        <ArticleTwo {...article} />
                    </div>
                ))}
            </div>
            <h2 class="section-title">Article Style C</h2>
            <div className="row">
                {articles.style_c.map(article => (
                    <div className="col-12 col-sm-4 col-lg-4">
                        <ArticleThree {...article} />
                    </div>
                ))}
            </div>
        </React.Fragment>
    )
}
