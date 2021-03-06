#!/usr/bin/env python3

"""
Script for starting Django server within a container
"""

import os
import subprocess
import discover

def main():
    discover.set_django_env()
    subprocess.check_call(["gunicorn", "jianjin.wsgi",
                           "--log-file", "-", "--access-logfile", "-",
                           "--log-level", "debug" if os.environ.get("GUNICORN_DEBUG", "0") == "1" else "info",
                           "--bind", "0.0.0.0:8000"])

if __name__ == '__main__':
    main()
