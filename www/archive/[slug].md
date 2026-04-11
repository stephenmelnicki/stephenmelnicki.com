<article class="mb-4 py-8 border-b border-gray-200 dark:border-slate-200">
    <header>
        <hgroup>
            <h2 class="text-3xl font-bold dark:text-white">
                {{ $params.title }}
            </h2>
            <div>
                <time class="text-muted" :datetime="$params.datetime">
                    {{ $params.date }}
                </time>
            </div>
        </hgroup>
    </header>
    <section class="prose prose-slate dark:prose-invert">
        <!-- @content -->
    </section>
</article>
