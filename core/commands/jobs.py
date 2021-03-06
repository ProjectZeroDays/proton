DESCRIPTION = "Display info about jobs."

def autocomplete(shell, line, text, state):
    pass

def help(shell):
    shell.print_plain("")
    shell.print_plain('Use "jobs %s" to view job results (if any).' % (shell.colors.colorize("JOB_ID", shell.colors.BOLD)))
    shell.print_plain('Use "jobs -h %s" to hide/unhide a job.' % (shell.colors.colorize("JOB_ID", shell.colors.BOLD)))
    shell.print_plain('Use "jobs -h" to view hidden jobs.')
    shell.print_plain("")

def print_job(shell, id):
    for jkey, job in shell.jobs.items():
        if job.id == int(id) and job.status_string() in ["Completed", "Failed"]:
            job.display()

def hide_jobs(shell, ids):
    all_ids = []
    for id in ids.split(','):
        if '-' in id:
            [all_ids.append(i) for i in range(int(id.split('-')[0]), int(id.split('-')[-1])+1)]
        else:
            all_ids.append(int(id))
    for jkey, job in shell.jobs.items():
        if job.id in all_ids:
            job.hidden = not job.hidden

def print_all_jobs(shell, hidden=False):
    if shell.jobs == {}:
        shell.print_error("No active jobs yet!")
        return
    
    formats = "\t{0:<5}{1:<10}{2:<20}{3:<40}"

    shell.print_plain("")

    shell.print_plain(formats.format("ID", "STATUS", "ZOMBIE", "NAME"))
    shell.print_plain(formats.format("-"*2,  "-"*6, "-"*6, "-"*4))
    for jkey, job in shell.jobs.items():
        if job.session_id != -1:
            zombie = "%s (%d)" % (job.ip, job.session_id)
        else:
            zombie = "%s (%d)" % (job.ip, -1)

        shell.print_plain(formats.format(job.id, job.status_string(), zombie, job.name))
        
    shell.print_plain("")

def execute(shell, cmd):

    splitted = cmd.split()

    if len(splitted) > 2:
        if splitted[1] == '-h':
            hide_jobs(shell, splitted[2])
            return
        else:
            shell.print_error("Unknown option!")
    elif len(splitted) > 1 and splitted[1] == '-h':
        print_all_jobs(shell, True)
        return
    elif len(splitted) > 1:
        id = splitted[1]
        try:
            print_job(shell, id)
        except ValueError:
            shell.print_error("Unknown option!")
        return

    print_all_jobs(shell)
