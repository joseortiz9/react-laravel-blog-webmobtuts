import React from 'react';

class CommentForm extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div className="respond">

                <h3>Leave a Comment</h3>

                <form name="contactForm" id="contactForm" method="post" action="">
                    <fieldset>

                        <div className="message group">
                            <textarea name="comment" id="cMessage" rows="10" cols="50"></textarea>
                        </div>

                        <button type="submit" className="submit">Submit</button>

                    </fieldset>
                </form>

            </div>
        );
    }
}

export default CommentForm;
