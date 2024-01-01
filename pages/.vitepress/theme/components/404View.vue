<template>
    <main>
        <section id="NotFound">
            <span>404</span>
            <h1>Not Found!</h1>
            <p>Hmm, Sorry... The page you are looking for could not be found, maybe something went wrong?</p>
        </section>
    </main>
</template>

<style>
#NotFound {
    background-color: var(--color-background-second);
    border-radius: 10px;
    padding: 30px 20px;
    box-shadow: var(--base-shadow);
    margin-bottom: 20px;
    color: var(--color-text-secondary);
    width: 100%;
    text-align: center;
}

#NotFound h1 {
    font-size: 2em;
    margin-top: 0 !important;
    font-weight: 800;
    margin-bottom: 0 !important;
}

#NotFound span {
    font-size: 7em;
    font-weight: 800;
    letter-spacing: -12.2px;
    line-height: -2px;
    color: var(--color-text-primary);
}
</style>