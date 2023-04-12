# sympy_examples

Examples of Sympy (Python simulation)

## Sympy installation

[https://docs.sympy.org/latest/install.html#installation]

Using Anaconda: [https://docs.anaconda.com/anaconda/user-guide/tasks/docker/]

** Containers are the applications.

## Jupiter notebooks

docker run -i -t -p 8888:8888 continuumio/anaconda3 /bin/bash -c "\
    conda install jupyter -y --quiet && \
    mkdir -p /opt/notebooks && \
    jupyter notebook \
    --notebook-dir=/opt/notebooks --ip='*' --port=8888 \
    --no-browser --allow-root"