export default () => {
    return (
        <footer id="footer" className="dark">
            <div id="copyrights">
                <div className="container center clearfix">
                    &copy; {new Date().getFullYear()}
                    {` `}wedding app. Powered by {` `}
                    <a target="_blank" rel="copyright" style={{ textDecoration: 'none' }} title="Yazılım ve Geliştirme" href="https://www.piyanos.com">Piyanos Software.</a>
                </div>
            </div>
        </footer>
    )
}