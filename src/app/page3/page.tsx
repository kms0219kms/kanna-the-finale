'use client';
import styles from './styles.module.css';

export default function Page2() {
    return (
        <div className={styles.container}>
            <video
                className={styles.video}
                src="https://airikannalastconcert.s3.ap-northeast-1.amazonaws.com/Airi_kanna_Last_Concert_wallpaper.mp4?response-content-disposition=inline&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLW5vcnRoZWFzdC0xIkYwRAIgQEieeM6s0wOFdSBtXfmRAcbCttdDD0bvRXE86sxlup0CIDrmorNmSj1HGA77t2c8BKDu6ictRyoxVEbmzfG73Xx4KssDCEgQABoMNTMzMjY3MDQ5ODc5IgwVMy%2Fhmc1tqPVEZoUqqAMVFMdgzleNZlXDjadeR3a%2BxJv5%2Bw71I3K1nDWvgGHRdDEyKfGGJelugo9S9Sh5h7MA%2FdIlZd9iG8sj6apKO3a1UrLA3jdneKd%2B21FStZ8QWG9IE%2F5KuBnls2c4Jo88s5F9mhaKOp%2BGt%2F1cWshS8hkv8IwjfYzV%2F3Ou9rQSRw%2F201O%2B0MDG1661gaysGKKo0t6VizT1SW7Vzi5CXxYzApl7viyw5okXQ0rCsRFAcKwxBICMxN90zRM7P1dig4P1t1sCCaY1LFJXEs71hcwjlm6f7IE4Rx6jCI%2FzybWYq9lD39sxCK9Uk4lzQiQMgmeZiQIBDTbH4Ectfa29jl1jv%2Bpu0BSaaT5rggThYACiDFJzS1x2lovV82II9PTDrTFhYs9rtViMOCG%2B45l%2Bad3zbfMWpA4Tj8MYRXsT3xJPZwYIKDd3L9Wr%2By6d8%2F7QaB8%2FtizO0syHDXbqLStRhOgABad5%2FMSWuTc%2FYTUnwMakOwhvPAuhaADopKqoowoblY4YQ3n8cBUSodMdAbRDOHfbTqslcYORsN8UYDsY2FflugC2CTpOi9aBmotwMMbDmroGOuUCeBC%2BtymIF6kMgzUNPbjeHnOnzybxdms5oWlPUqP0my4MnPQIJBC2ek3DxhyteJwo5B7Fl2Q9CflBJeBfdSIvp2vbutoH4TMMS5NAaHQdX2GpRN%2Bsk6KzkY2wuEl0slCJGd%2B8pJv6wPS9cqLZ13s5MXcpMBWfJALIfdORoCxNmyGdlGfkC3TEgadIbO4YcnB3rK6mD6a9vjoKq0LI45kCuAbvtF5zyIfF%2B1BCUYFJd3QiP75kyW5SbTJ22mG3ELTFDKxRRWuo6VF2yBsBvv6DN12Y7n2VzAJFvWFqAkIWnszT%2F0VY8K2m200qe2ZUoErNrBzZHGUZqyfXvtrxCNTG7ogeNgjmwm0Kvtsp0%2B5Mpsj2HmuyxdShV1%2FhRL3po%2FTGGzIZPo3rkVjD9UjGA2IsWgZPT9XbiBdOCFJwJy3X6tGkwPoBCENBfyJnf1xMWdLOoV3IJvyhu4oMw6kzHzSC%2Bjm5aMrL&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAXYKJRNWL7X2VXGQU%2F20241127%2Fap-northeast-1%2Fs3%2Faws4_request&X-Amz-Date=20241127T142732Z&X-Amz-Expires=43200&X-Amz-SignedHeaders=host&X-Amz-Signature=10699af697fb5f854d36864af7be4ff91d5239ec68d19fd50267a79e48dca449"
                muted
                loop
                playsInline
                autoPlay
            />
            <img className={styles.logo} src="The_finale_logo3.png"/>
            <div className={styles.left__bar}></div>
            <div className={styles.right__bar}></div>
            <div className={styles.bottom__bar}></div>
            <p className={`${styles.left__content} ${styles.raleway__medium}`}>The last song</p>
            <p className={`${styles.right__content} ${styles.raleway__medium}`}>of Stellar</p>
        </div>
    );
}