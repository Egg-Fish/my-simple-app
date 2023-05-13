
function ExplanationSection() {
    return (
        <div className="w-1/2 h-auto m-auto p-5 bg-[rgba(1,1,1,0.1)] rounded-xl">
            <div className="font-bold text-4xl">Introduction</div>
            <p className="italic">
                This section is found in the ExplanationSection.js file. Everything
                you see in this website is built using React.
            </p>

            <br />

            <p>
                React is a framework based around functions. You can break down 
                your large-scale website into smaller, more manageable functions
                called components. (Check out App.js and see what kinds of components
                this page is made of!) The whole idea of using a framework is that
                nowadays, websites are full of content and functionality. We need
                a way to structure our web development, as well as eliminate the
                repetitive work of copying and pasting similar HTML code.
            </p>

            <br />

            <p>
                To get started with React, you should know HTML and CSS fairly
                well. Having knowledge about JS can be useful; just learn how to
                create a function. If you can understand intuitively how this webpage
                works, you are good to write your own Reach web page! (Bonus tip:
                use Tailwind CSS to make your page look nice!)
            </p>

            <br />

            <p>
                (now, hosting the application, debugging, and managing node.js
                packages are a thing of itself. It is useful in the long run, but
                if you just need a simple webpage that is solely for display, these
                things are secondary issues.)
            </p>
        </div>
    );
}

export default ExplanationSection;